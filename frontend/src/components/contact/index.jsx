import { useState } from 'react';

function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server).

    // Assuming the submission was successful:
    setSubmitted(true);
  };

  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-dollar-sign"></i> Bog'lanish
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">men bilan
              <span>bog'lanish!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-animation="fade_from_bottom">info@moorfo.uz</h3>
          <p id="required-msg">* Belgilangan maydonlarni to'ldirish talab qilinadi.</p>

          <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="alert alert-success messenger-box-contact__msg" role="alert">
                Xabaringiz muvaffaqiyatli yuborildi.
              </div>
            )}
            <div className="row">
              <div className="col-md-6">
                {/* Other input fields */}
              </div>
              {/* Rest of the form input fields */}
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button className="theme-btn" name="submit" type="submit" id="submit-form">
                    xabar yuborish
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
