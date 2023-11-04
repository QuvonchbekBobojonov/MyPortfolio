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
            <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="full-name">to'liq ism <sup>*</sup></label>
                                            <input type="text" name="full-name" id="full-name"
                                                placeholder="To'liq ismingiz" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="email">Email <sup>*</sup></label>
                                            <input type="email" name="email" id="email"
                                                placeholder="Sizning e-pochta manzilingiz" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="phone-number">telefon <span>(ixtiyoriy)</span></label>
                                            <input type="text" name="phone-number" id="phone-number"
                                                placeholder="Telefon raqamingiz" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="subject">Mavzu <sup>*</sup></label>
                                            <input type="text" name="subject" id="subject" placeholder="Mavru kiriting" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <label for="budget">sizning byudjetingiz <span>(ixtiyoriy)</span></label>
                                            <input type="number" name="budget" id="budget"
                                                placeholder="Loyihangiz uchun bir qator byudjet" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <label for="message">xabar</label>
                                            <textarea name="message" id="message"
                                                placeholder="Xabaringizni shu yerga yozing..."></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group upload-attachment">
                                            <div>
                                                <label for="upload-attachment">
                                                    <i class="las la-cloud-upload-alt"></i> fayl yuklang
                                                    <input type="file" name="file" id="upload-attachment" />
                                                </label>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group submit-btn-wrap">
                                            <button class="theme-btn" name="submit" type="submit" id="submit-form">xabar
                                                yuborish</button>
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
