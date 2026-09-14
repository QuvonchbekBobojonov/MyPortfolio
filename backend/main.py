from datetime import date
from pathlib import Path
from fastapi import FastAPI, Form
from fastapi.responses import Response
from typing import Optional
import httpx
import json
import os
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware

from cv import build_cv

load_dotenv()

DATA_FILE = Path(__file__).parent / "data" / "profile.json"

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


def load_data() -> dict:
    data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    profile = data["profile"]
    year = date.today().year
    experience = year - profile["career_start_year"]

    profile["full_name"] = f"{profile['first_name']} {profile['last_name']}"
    profile["age"] = year - profile["birth_year"]
    profile["experience_years"] = experience
    if experience < 2:
        profile["level"] = "Junior Developer"
    elif experience < 5:
        profile["level"] = "Middle Developer"
    else:
        profile["level"] = "Senior Developer"
    return data


@app.get("/data/")
def get_data():
    return load_data()


@app.get("/cv/")
def download_cv():
    data = load_data()
    profile = data["profile"]
    filename = f"{profile['first_name']}_{profile['last_name']}_CV.pdf"
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

