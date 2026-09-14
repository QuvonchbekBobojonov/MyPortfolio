import logging
import os
from io import BytesIO
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ACCENT = colors.HexColor("#1a9e5f")
TEXT = colors.HexColor("#1f2328")
MUTED = colors.HexColor("#5b6470")

MARGIN = 16 * mm

FONTS_DIR = Path(__file__).parent / "fonts"
# Kirill harflari uchun TTF shrift kerak; birinchi topilgan juftlik ishlatiladi.
FONT_CANDIDATES = [
    (os.getenv("CV_FONT_REGULAR"), os.getenv("CV_FONT_BOLD")),
    (FONTS_DIR / "DejaVuSans.ttf", FONTS_DIR / "DejaVuSans-Bold.ttf"),
    ("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ("/usr/share/fonts/TTF/DejaVuSans.ttf", "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf"),
    ("C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/arialbd.ttf"),
]


def _register_fonts():
    for regular, bold in FONT_CANDIDATES:
        if regular and bold and Path(regular).is_file() and Path(bold).is_file():
            pdfmetrics.registerFont(TTFont("CV", str(regular)))
            pdfmetrics.registerFont(TTFont("CV-Bold", str(bold)))
            return "CV", "CV-Bold"
    logging.getLogger(__name__).warning(
        "CV uchun TTF shrift topilmadi, Helvetica ishlatiladi (ruscha CV to'g'ri chiqmaydi). "
        "backend/fonts/ da DejaVuSans.ttf va DejaVuSans-Bold.ttf borligini tekshiring "
        "yoki CV_FONT_REGULAR/CV_FONT_BOLD ni belgilang."
    )
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = _register_fonts()

STYLES = {
    "name": ParagraphStyle("name", fontName=FONT_BOLD, fontSize=22, leading=26, textColor=TEXT),
    "headline": ParagraphStyle("headline", fontName=FONT, fontSize=11, leading=15, textColor=ACCENT),
    "contact": ParagraphStyle("contact", fontName=FONT, fontSize=8.5, leading=12, textColor=MUTED),
    "section": ParagraphStyle(
        "section", fontName=FONT_BOLD, fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=12,
        keepWithNext=1,
    ),
    "body": ParagraphStyle("body", fontName=FONT, fontSize=9.5, leading=13.5, textColor=TEXT, spaceAfter=4),
    "item_title": ParagraphStyle("item_title", fontName=FONT_BOLD, fontSize=10, leading=13, textColor=TEXT),
    "item_meta": ParagraphStyle("item_meta", fontName=FONT, fontSize=9, leading=12, textColor=MUTED),
    "item_date": ParagraphStyle(
        "item_date", fontName=FONT, fontSize=9, leading=13, textColor=MUTED, alignment=TA_RIGHT
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


def _timeline_item(item, date_col):
    header = Table(
        [[_p(item["title"], "item_title"), _p(item["date"], "item_date")]],
        colWidths=["*", date_col],
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


def _footer(name, labels):
    def draw(canvas, doc):
        canvas.saveState()
        canvas.setFont(FONT, 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(MARGIN, 9 * mm, f"{name} — {labels['document']}")
        canvas.drawRightString(A4[0] - MARGIN, 9 * mm, f"{labels['page']} {doc.page}")
        canvas.restoreState()

    return draw


def build_cv(data: dict) -> bytes:
    profile = data["profile"]
    labels = data["ui"]["cv"]
    name = profile["full_name"]
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=MARGIN,
        title=f"{name} — {labels['document']}",
        author=name,
        subject=profile["title"],
    )

    story = [
        _p(name, "name"),
        _p(profile["headline"], "headline"),
        Spacer(1, 4),
        _contact_line(data),
    ]

    story += _section(labels["summary"])
    story += [_p(paragraph, "body") for paragraph in profile["summary"]]

    # Sana ustuni eng uzun sanaga moslanadi, shunda "Май 2026 - наст. время" bir qatorda qoladi.
    date_style = STYLES["item_date"]
    date_col = max(
        pdfmetrics.stringWidth(item["date"], date_style.fontName, date_style.fontSize)
        for item in data["experience"] + data["education"]
    ) + 3 * mm

    story += _section(labels["experience"])
    story += [_timeline_item(item, date_col) for item in data["experience"]]

    story += _section(labels["education"])
    story += [_timeline_item(item, date_col) for item in data["education"]]

    story += _section(labels["skills"])
    story.append(_p(" · ".join(skill["name"] for skill in data["skills"]), "body"))

    projects = data.get("portfolio", [])
    if projects:
        story += _section(labels["projects"])
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
        story += _section(labels["certifications"])
        story.append(_p(" · ".join(data["certifications"]), "body"))

    story += _section(labels["languages"])
    story.append(_p(" · ".join(f"{lang['name']} ({lang['level']})" for lang in profile["languages"]), "body"))

    footer = _footer(name, labels)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return buffer.getvalue()
