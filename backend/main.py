from fastapi import FastAPI, Form
import httpx
import os
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


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
        check_telegram_username_response = await client.get(
            f"https://t.me/{telegram_username}"
        )
        if check_telegram_username_response.status_code != 200:
            return {"success": False, "message": "Telegram username does not exist."}

        response = await client.post(url, data={"chat_id": CHAT_ID, "text": text})
        response.raise_for_status()

    return {"success": True, "message": "Message sent!"}
