import {useState} from 'react';
import axios from 'axios';

function Contact() {
    const [isSubmitted, setSubmitted] = useState(false);
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
        const telegramUsername = data.get('telegram_username');

        if (!fullName || !email || !phoneNumber || !subject || !message || !telegramUsername) {
            setError(true);
            setResponseMessage("Please fill in all required fields.");
            setTimeout(() => {
                setError(false);
                setResponseMessage('');
            }, 15000);
            return;
        }

        setError(false);
        setResponseMessage('');
        setSubmitted(false);

        try {
            const response = await axios.post('https://api.moorfo.uz/send_telegram/', data, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

            if (response.data && response.data.success === false) {
                setResponseMessage(response.data.message || "Operation failed.");
                setError(true);
                setTimeout(() => {
                    setError(false);
                    setResponseMessage('');
                }, 15000);
                return;
            }

            setResponseMessage(response.data.message || "Your message has been successfully sent.");
            setSubmitted(true);

            form.reset();
            setTimeout(() => {
                setSubmitted(false);
                setResponseMessage('');
            }, 15000);

        } catch (err) {
            const errorMessage = err.response?.data?.message || "An unexpected error occurred. Please try again.";
            setResponseMessage(errorMessage);
            setError(true);
            setTimeout(() => {
                setError(false);
                setResponseMessage('');
            }, 15000);
        }
    };

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> Contact
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Get in&nbsp;<span>touch!</span>
                        </h1>
                    </div>

                    <h3 className="scroll-animation" data-animation="fade_from_bottom">hi@moorfo.uz</h3>

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
                                    <label htmlFor="full-name">Full Name <sup>*</sup></label>
                                    <input type="text" name="full_name" id="full-name" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">Email <sup>*</sup></label>
                                    <input type="email" name="email" id="email" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">Phone <sup>*</sup></label>
                                    <input type="text" name="phone_number" id="phone-number" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">Subject <sup>*</sup></label>
                                    <input type="text" name="subject" id="subject" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="telegram-username">Telegram Username <sup>*</sup></label>
                                    <input type="text" name="telegram_username" id="telegram-username"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="budget">Your Budget <span>(optional)</span></label>
                                    <input type="number" name="budget" id="budget"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">Message <sup>*</sup></label>
                                    <textarea name="message" id="message" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" type="submit" id="submit-form">
                                        {isSubmitted ? 'Sent Successfully' : 'Send Message'}
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