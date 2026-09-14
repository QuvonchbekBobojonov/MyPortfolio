from io import BytesIO
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ACCENT = colors.HexColor("#1a9e5f")
TEXT = colors.HexColor("#1f2328")
MUTED = colors.HexColor("#5b6470")

MARGIN = 16 * mm
DATE_COL = 36 * mm

STYLES = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=TEXT),
    "headline": ParagraphStyle("headline", fontName="Helvetica", fontSize=11, leading=15, textColor=ACCENT),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=12,
        keepWithNext=1,
    ),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=TEXT, spaceAfter=4),
    "item_title": ParagraphStyle("item_title", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=TEXT),
    "item_meta": ParagraphStyle("item_meta", fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED),
    "item_date": ParagraphStyle(
        "item_date", fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED, alignment=TA_RIGHT
    ),
}


def _p(text, style):
    return Paragraph(escape(str(text)), STYLES[style])


def _link(url, label=None):
    label = label or url.split("://", 1)[-1].rstrip("/")
    return f'<a href="{escape(url)}" color="#5b6470">{escape(label)}</a>'


def _section(title):
    rule = HRFlowable(width="100%", thickness=0.6, color=ACCENT, spaceBefore=2, spaceAfter=6)
    rule.keepWithNext = 1  # sarlavha sahifa oxirida yolg'iz qolmasin
    return [Paragraph(escape(title.upper()), STYLES["section"]), rule]


def _timeline_item(item):
    header = Table(
        [[_p(item["title"], "item_title"), _p(item["date"], "item_date")]],
        colWidths=["*", DATE_COL],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    place = " · ".join(filter(None, [item.get("place"), item.get("location")]))
    flowables = [header, _p(place, "item_meta")]
    if item.get("description"):
        flowables += [Spacer(1, 2), _p(item["description"], "body")]
    flowables.append(Spacer(1, 7))
    return KeepTogether(flowables)


def _contact_line(data):
    profile = data["profile"]
    parts = [
        _link(f"mailto:{profile['email']}", profile["email"]),
        _link(f"tel:{profile['phone_link']}", profile["phone"]),
        _link(profile["website"]),
    ]
    parts += [_link(s["url"]) for s in data.get("socials", []) if s["name"] in ("LinkedIn", "GitHub")]
    return Paragraph("  |  ".join(parts) + "<br/>" + escape(profile["address"]), STYLES["contact"])


def _footer(name):
    def draw(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(MARGIN, 9 * mm, f"{name} — Curriculum Vitae")
        canvas.drawRightString(A4[0] - MARGIN, 9 * mm, f"Page {doc.page}")
        canvas.restoreState()

    return draw


def build_cv(data: dict) -> bytes:
    profile = data["profile"]
    name = profile["full_name"]
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=MARGIN,
        title=f"{name} — CV",
        author=name,
        subject=profile["title"],
    )
    story = [
        _p(name, "name"),
        _p(profile["headline"], "headline"),
        Spacer(1, 4),
        _contact_line(data),
    ]

    story += _section("Summary")
    story += [_p(paragraph, "body") for paragraph in profile["summary"]]

    story += _section("Experience")
    story += [_timeline_item(item) for item in data["experience"]]

    story += _section("Education")
    story += [_timeline_item(item) for item in data["education"]]

    story += _section("Skills")
    story.append(_p(" · ".join(skill["name"] for skill in data["skills"]), "body"))

    projects = data.get("portfolio", [])
    if projects:
        story += _section("Projects")
        for project in projects:
            title = escape(project["title"])
            if project.get("link", "").startswith("http"):
                title += f"  <font size=8.5>{_link(project['link'])}</font>"
            story.append(KeepTogether([
                Paragraph(title, STYLES["item_title"]),
                _p(", ".join(project["tech"]), "item_meta"),
                Spacer(1, 6),
            ]))

    if data.get("certifications"):
        story += _section("Certifications")
        story.append(_p(" · ".join(data["certifications"]), "body"))

    story += _section("Languages")
    story.append(_p(" · ".join(f"{lang['name']} ({lang['level']})" for lang in profile["languages"]), "body"))

    footer = _footer(name)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return buffer.getvalue()
