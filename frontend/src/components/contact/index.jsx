import {useState} from 'react';
import aixos from 'axios';

function Contact() {
    const [isSubmitted, setSubmitted] = useState(false);

    const SendToTelegram = (fullName, email, phoneNumber, subject, budget, message) => {
        const chatId = '6387607435';
        const token = '6929643894:AAFbx_AP2TV8qSTiHVq9DwtGqxMDYNobVKs';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Ism: ${fullName}%0AEmail: ${email}%0ATelefon: ${phoneNumber}%0AMavzu: ${subject}%0AByudjet: ${budget}%0AXabar: ${message}`;
        aixos.get(url)
            .then((response) => {
                console.log(response);
                setSubmitted(true);
            })
            .catch((error) => {
                console.log(error);
            });

    }

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
        SendToTelegram(fullName, email, phoneNumber, subject, budget, message);
        form.reset();
        setTimeout(() => {
            setSubmitted(false);
        },1500);
    };

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <i className="las la-dollar-sign"></i> Bog'lanish
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Men bilan&nbsp;
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>bog'lanish!</span>
                        </h1>
                    </div>
                    <h3 className="scroll-animation" data-animation="fade_from_bottom">moorfoinfo@gmail.com</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p id="required-msg">* Belgilangan maydonlarni to'ldirish talab qilinadi.</p>

                    <form className="contact-form scroll-animation" data-animation="fade_from_bottom"
                          onSubmit={handleSubmit}>
                        {isSubmitted && (
                            <div className="alert alert-success messenger-box-contact__msg" role="alert">
                                Xabaringiz muvaffaqiyatli yuborildi.
                            </div>
                        )}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <label htmlFor="full-name">to'liq ism <sup>*</sup></label>
                                    <input type="text" name="full-name" id="full-name" placeholder="To'liq ismingiz"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">Email <sup>*</sup></label>
                                    <input type="email" name="email" id="email"
                                           placeholder="Sizning e-pochta manzilingiz"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">telefon <span>(ixtiyoriy)</span></label>
                                    <input type="text" name="phone-number" id="phone-number"
                                           placeholder="Telefon raqamingiz"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">Mavzu <sup>*</sup></label>
                                    <input type="text" name="subject" id="subject" placeholder="Mavzu kiriting"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="budget">sizning byudjetingiz <span>(ixtiyoriy)</span></label>
                                    <input type="number" name="budget" id="budget"
                                           placeholder="Loyihangiz uchun bir qator byudjet"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">xabar</label>
                                    <textarea name="message" id="message"
                                              placeholder="Xabaringizni shu yerga yozing..."></textarea>
                                </div>
                            </div>
                            {/*<div className="col-md-12">*/}
                            {/*    <div className="input-group upload-attachment">*/}
                            {/*        <div>*/}
                            {/*            <label htmlFor="upload-attachment">*/}
                            {/*                <i className="las la-cloud-upload-alt"></i> fayl yuklang*/}
                            {/*                <input type="file" name="file" id="upload-attachment" />*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" name="submit" type="submit" id="submit-form">Xabar
                                        yuborish
                                    </button>
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
