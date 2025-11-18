from fastapi import FastAPI, Form
import httpx
import os
import re
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from starlette.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

ALLOWED_ORIGINS = [
    "https://moorfo.uz",
    "https://www.moorfo.uz",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

USERNAME_REGEX = r"^[a-zA-Z0-9_]{5,32}$"


async def check_telegram_username(username: str) -> bool:
    if not re.match(USERNAME_REGEX, username):
        return False

    url = f"https://t.me/{username}"
    async with httpx.AsyncClient(follow_redirects=True, timeout=10.0) as client:
        resp = await client.get(url)
        html = resp.text.lower()

    if f"@{username.lower()}" in html:
        return True

    soup = BeautifulSoup(html, "html.parser")

    selectors = [
        ".tgme_page",
        ".tgme_page_user",
        ".tgme_page_title",
        ".tgme_page_description",
        ".tgme_page_photo",
    ]

    for sel in selectors:
        if soup.select_one(sel):
            return True

    negative_markers = [
        "user not found",
        "sorry, this username isn't valid",
        "we can't find this account",
        "аккаунт не найден",
        "пользователь не найден",
    ]

    for marker in negative_markers:
        if marker in html:
            return False

    return False


@app.post("/send_telegram/")
async def send_to_telegram(
    full_name: str = Form(...),
    email: str = Form(...),
    phone_number: str = Form(...),
    subject: str = Form(...),
    budget: str = Form(...),
    message: str = Form(...),
    telegram_username: str = Form(...)
):
    username_exists = await check_telegram_username(telegram_username)

    if not username_exists:
        return {"success": False, "message": "Telegram username does not exist."}

    text = (
        f"📩 Yangi xabar!\n\n"
        f"👤 Ism: {full_name}\n"
        f"📧 Email: {email}\n"
        f"📞 Telefon: {phone_number}\n"
        f"👤 Telegram: @{telegram_username}\n"
        f"📌 Mavzu: {subject}\n"
        f"💰 Byudjet: {budget}\n"
        f"💬 Xabar: {message}"
    )

    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

    async with httpx.AsyncClient() as client:
        response = await client.post(url, data={"chat_id": CHAT_ID, "text": text})
        response.raise_for_status()

    return {"success": True, "message": "Message sent!"}
