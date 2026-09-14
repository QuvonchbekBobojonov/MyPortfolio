import {useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../api';
import {useSiteData} from '../../site-data';

function Contact() {
    const {profile, ui} = useSiteData();
    const t = ui.contact;
    const [isSubmitted, setSubmitted] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const fullName = data.get('full_name');
        const email = data.get('email');
        const phoneNumber = data.get('phone_number');
        const subject = data.get('subject');
        const message = data.get('message');

        setLoading(true);

        if (!fullName || !email || !phoneNumber || !subject || !message) {
            setError(true);
            setResponseMessage(t.required);
            setTimeout(() => {
                setError(false);
                setResponseMessage('');
            }, 5000);
            return;
        }

        setError(false);
        setResponseMessage('');
        setSubmitted(false);

        try {
            const response = await axios.post(`${API_URL}/send_telegram/`, data, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

            if (response.data && response.data.success === false) {
                setResponseMessage(t.error);
                setError(true);
                setTimeout(() => {
                    setError(false);
                    setResponseMessage('');
                }, 5000);
                return;
            }

            setResponseMessage(t.success);
            setSubmitted(true);

            form.reset();
            setTimeout(() => {
                setSubmitted(false);
                setResponseMessage('');
                setLoading(false);
            }, 5000);

        } catch {
            setResponseMessage(t.error);
            setError(true);
            setTimeout(() => {
                setError(false);
                setResponseMessage('');
                setLoading(false)
            }, 5000);
        }
    };

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> {ui.nav.contact}
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            {t.title[0]}&nbsp;<span>{t.title[1]}</span>
                        </h1>
                    </div>

                    <h3 className="scroll-animation" data-animation="fade_from_bottom">{profile.email}</h3>

                    {responseMessage && (
                        <p className={`alert messenger-box-contact__msg ${error ? 'alert-danger' : 'alert-success'}`}
                           role="alert">
                            {responseMessage}
                        </p>
                    )}

                    <form className="contact-form scroll-animation" data-animation="fade_from_bottom"
                          onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="full-name">{t.full_name} <sup>*</sup></label>
                                    <input type="text" name="full_name" id="full-name" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">{t.email} <sup>*</sup></label>
                                    <input type="email" name="email" id="email" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">{t.phone} <sup>*</sup></label>
                                    <input type="text" name="phone_number" id="phone-number" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">{t.subject} <sup>*</sup></label>
                                    <input type="text" name="subject" id="subject" required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="budget">{t.budget} <span>{t.optional}</span></label>
                                    <input type="number" name="budget" id="budget"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">{t.message} <sup>*</sup></label>
                                    <textarea name="message" id="message" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" type="submit" id="submit-form">
                                        {isSubmitted ? t.sent : isLoading ? t.sending : t.send}
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
