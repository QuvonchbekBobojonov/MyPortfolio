from fastapi import FastAPI, Form
from typing import Optional
import httpx
import os
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware

load_dotenv()

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

