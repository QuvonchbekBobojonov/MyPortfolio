from datetime import date
from pathlib import Path
from fastapi import FastAPI, Form
from fastapi.responses import Response
from typing import Literal, Optional
import httpx
import json
import os
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware

from cv import build_cv

load_dotenv()

DATA_FILE = Path(__file__).parent / "data" / "profile.json"
LANGS = ("en", "uz", "ru")
Lang = Literal["en", "uz", "ru"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://moorfo.uz",
        "https://www.moorfo.uz",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


def localize(value, lang):
    """{"en": ..., "uz": ..., "ru": ...} ko'rinishidagi qiymatlarni tanlangan tildagi qiymat bilan almashtiradi."""
    if isinstance(value, dict):
        if "en" in value and set(value) <= set(LANGS):
            return value.get(lang, value["en"])
        return {key: localize(item, lang) for key, item in value.items()}
    if isinstance(value, list):
        return [localize(item, lang) for item in value]
    return value


def format_period(start, end, dates):
    """"2024-05" -> "May 2024", "2024" -> "2024", None -> "Present" (tanlangan tilda)."""
    def fmt(value):
        if value is None:
            return dates["present"]
        year, _, month = value.partition("-")
        return f"{dates['months'][int(month) - 1]} {year}" if month else year

    if start == end:
        return fmt(start)
    return f"{fmt(start)} - {fmt(end)}"


def load_data(lang: str = "en") -> dict:
    data = localize(json.loads(DATA_FILE.read_text(encoding="utf-8")), lang)
    ui = data["ui"]
    for item in data["experience"] + data["education"]:
        item["date"] = format_period(item.pop("start"), item.pop("end"), ui["dates"])

    profile = data["profile"]
    year = date.today().year
    experience = year - profile["career_start_year"]

    profile["full_name"] = f"{profile['first_name']} {profile['last_name']}"
    profile["age"] = year - profile["birth_year"]
    profile["experience_years"] = experience
    if experience < 2:
        level = "junior"
    elif experience < 5:
        level = "middle"
    else:
        level = "senior"
    profile["level"] = ui["levels"][level]
    data["lang"] = lang
    return data


@app.get("/data/")
def get_data(lang: Lang = "en"):
    return load_data(lang)


@app.get("/cv/")
def download_cv(lang: Lang = "en"):
    data = load_data(lang)
    profile = data["profile"]
    filename = f"{profile['first_name']}_{profile['last_name']}_CV_{lang.upper()}.pdf"
    return Response(
        content=build_cv(data),
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.post("/send_telegram/")
async def send_to_telegram(
    full_name: str = Form(...),
    email: str = Form(...),
    phone_number: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...),
    budget: Optional[str] = Form(None),
):
    budget_text = budget if budget else "Kiritilmagan"
    text = (
        f"📩 Yangi xabar!\n\n"
        f"👤 Ism: {full_name}\n"
        f"📧 Email: {email}\n"
        f"📞 Telefon: {phone_number}\n"
        f"📌 Mavzu: {subject}\n"
        f"💰 Byudjet: {budget_text}\n"
        f"💬 Xabar: {message}"
    )

    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

    async with httpx.AsyncClient() as client:
        response = await client.post(url, data={"chat_id": CHAT_ID, "text": text})
        response.raise_for_status()

    return {"success": True, "message": "Successfully delivered! Quvonchbek has received your message."}

