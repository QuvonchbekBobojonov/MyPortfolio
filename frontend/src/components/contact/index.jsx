import { useState } from "react";
import axios from "axios";

function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const SendToTelegram = (fullName, email, phoneNumber, subject, budget, message) => {
    const chatId = "6387607435";
    const token = ""; // Secure the token in .env
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios
      .post(url, {
        chat_id: chatId,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nBudget: ${budget}\nMessage: ${message}`,
      })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const fullName = data.get("full-name");
    const email = data.get("email");
    const phoneNumber = data.get("phone-number");
    const subject = data.get("subject");
    const budget = data.get("budget");
    const message = data.get("message");

    if (!fullName || !email || !subject) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    SendToTelegram(fullName, email, phoneNumber, subject, budget, message);
    form.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
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
              Get in&nbsp;
              <span>touch!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-animation="fade_from_bottom">hi@moorfo.uz</h3>

          {error && (
            <p className="alert alert-danger messenger-box-contact__msg" role="alert">
              Please fill in the required fields.
            </p>
          )}

          <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="alert alert-success messenger-box-contact__msg" role="alert">
                Your message has been successfully sent.
              </div>
            )}
            <div className="row">
              {[
                { label: "Full Name", name: "full-name", type: "text", required: true },
                { label: "Email", name: "email", type: "email", required: true },
                { label: "Phone", name: "phone-number", type: "text", required: false },
                { label: "Subject", name: "subject", type: "text", required: true },
                { label: "Your Budget", name: "budget", type: "number", required: false },
              ].map((field, index) => (
                <div className="col-md-6" key={index}>
                  <div className="input-group">
                    <label htmlFor={field.name}>
                      {field.label} {field.required && <sup>*</sup>}
                    </label>
                    <input type={field.type} name={field.name} id={field.name} placeholder={`Enter your ${field.label.toLowerCase()}`} />
                  </div>
                </div>
              ))}

              <div className="col-md-12">
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Write your message here..."></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button className="theme-btn" name="submit" type="submit" id="submit-form">
                    Send Message
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
