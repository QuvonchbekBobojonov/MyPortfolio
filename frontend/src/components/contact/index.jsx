import { useState } from 'react';

function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
          <h3 className="scroll-animation" data-animation="fade_from_bottom">info@moorfo.uz</h3>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p id="required-msg">* Belgilangan maydonlarni to'ldirish talab qilinadi.</p>

          <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={handleSubmit}>
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
                        <label htmlFor="phone-number">telefon <span>(ixtiyoriy)</span></label>
                        <input type="text" name="phone-number" id="phone-number" placeholder="Telefon raqamingiz" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <label htmlFor="subject">Mavzu <sup>*</sup></label>
                        <input type="text" name="subject" id="subject" placeholder="Mavru kiriting" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group">
                        <label htmlFor="budget">sizning byudjetingiz <span>(ixtiyoriy)</span></label>
                        <input type="number" name="budget" id="budget" placeholder="Loyihangiz uchun bir qator byudjet" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group">
                        <label htmlFor="message">xabar</label>
                        <textarea name="message" id="message" placeholder="Xabaringizni shu yerga yozing..."></textarea>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group upload-attachment">
                        <div>
                            <label htmlFor="upload-attachment">
                                <i className="las la-cloud-upload-alt"></i> fayl yuklang
                                <input type="file" name="file" id="upload-attachment" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group submit-btn-wrap">
                        <button className="theme-btn" name="submit" type="submit" id="submit-form">Xabar yuborish</button>
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
