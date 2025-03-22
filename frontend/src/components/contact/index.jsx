import { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [isSubmitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const SendToTelegram = async (fullName, email, phoneNumber, subject, budget, message) => {
        const chatId = '6387607435';
        const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN; // Store in .env
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `Ism: ${fullName}\nEmail: ${email}\nTelefon: ${phoneNumber || "Ko'rsatilmagan"}\nMavzu: ${subject}\nByudjet: ${budget || "Ko'rsatilmagan"}\nXabar: ${message}`;

        try {
            await axios.post(url, {
                chat_id: chatId,
                text,
                parse_mode: "Markdown"
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Telegram API error:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const fullName = data.get('full-name');
        const email = data.get('email');
        const phoneNumber = data.get('phone-number');
        const subject = data.get('subject');
        const budget = data.get('budget');
        const message = data.get('message');

        if (!fullName || !email || !subject) {
            setError(true);
            setTimeout(() => setError(false), 1500);
            return;
        }

        SendToTelegram(fullName, email, phoneNumber, subject, budget, message);
        form.reset();
        setTimeout(() => setSubmitted(false), 1500);
    };

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> Bog'lanish
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Men bilan <span>bog'lanish!</span>
                        </h1>
                    </div>
                    <h3 className="scroll-animation" data-animation="fade_from_bottom">hi@moorfo.uz</h3>
                    {error && <p className="alert alert-danger">Belgilangan maydonlarni to'ldiring.</p>}
                    {isSubmitted && <p className="alert alert-success">Xabaringiz muvaffaqiyatli yuborildi.</p>}

                    <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="full-name">To'liq ism <sup>*</sup></label>
                                    <input type="text" name="full-name" id="full-name" placeholder="To'liq ismingiz" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">Email <sup>*</sup></label>
                                    <input type="email" name="email" id="email" placeholder="Sizning e-pochta manzilingiz" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">Telefon <span>(ixtiyoriy)</span></label>
                                    <input type="text" name="phone-number" id="phone-number" placeholder="Telefon raqamingiz" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">Mavzu <sup>*</sup></label>
                                    <input type="text" name="subject" id="subject" placeholder="Mavzu kiriting" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="budget">Sizning byudjetingiz <span>(ixtiyoriy)</span></label>
                                    <input type="number" name="budget" id="budget" placeholder="Loyihangiz uchun byudjet" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">Xabar</label>
                                    <textarea name="message" id="message" placeholder="Xabaringizni shu yerga yozing..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" type="submit">Xabar yuborish</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
