import BodyOverlay from "./components/body-overlay"
import LeftSidebar from "./components/left-sidebar"
import LeftSidebarMobile from "./components/left-sidebar-mobile"
import PageLoader from "./components/page-loader"
import ScrollNav from "./components/scroll-nav"
import SidebarMenu from "./components/sidebar-menu"

function App() {

  return (
    <div className="home5-page">

      <BodyOverlay />

      <PageLoader />

      <span className="icon-menu">
        <span className="bar"></span>
        <span className="bar"></span>
      </span>

      <SidebarMenu />

      <ScrollNav />

      <LeftSidebar />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">

            <LeftSidebarMobile />

            <section className="hero-section page-section scroll-to-page" id="home">

              <div className="custom-container">
                <div className="hero-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-home"></i> Asosy
                    </h4>
                    <h1 className="scroll-animation title" data-animation="fade_from_bottom">Assalomu
                      <span>Aleykum</span>
                    </h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom"> Dasturlarni yaxshi tushunish,
                    tahlil qilish va ishlab chiqish. Yaratilayotgan dasturlarini doimiy ravishda yangilash,
                    foydalanuvchilar uchun qulay imkoniyatlar yaratish.</p>

                  <div className="facts d-flex">
                    <div className="left scroll-animation" data-animation="fade_from_left">
                      <h1>1.5+</h1>
                      <p>Yilik Tajriba</p>
                    </div>
                    <div className="right scroll-animation" data-animation="fade_from_right">
                      <h1>13+</h1>
                      <p>loyihalar</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-area page-section scroll-to-page" id="about">
              <div className="custom-container">
                <div className="about-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="lar la-user"></i> Me haqimda
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Mening ismim
                      <br>
                        <span>Quvonckbek Bobojonov</span>
                    </h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom">
                    Men Full stack
                    dasturchisiman. Men yangi narsalarni yaratishni va murakkab muammolarni oddiy, chiroyli
                    va intuitiv dizaynga aylantirishni yaxshi ko'raman.

                    Mening vazifam sizning veb-saytingiz va ilovalaringizni funktsional va
                    foydalanuvchilarga qulay, lekin ayni paytda jozibador bo'lishi uchun yaratishdir. Bundan
                    tashqari, men sizning mahsulotingizga shaxsiy teginish qo'shaman va uning ko'zni
                    qamashtiruvchi va ishlatish uchun qulayligiga ishonch hosil qilaman. Mening maqsadim
                    sizning xabaringiz va shaxsingizni eng ijodiy tarzda etkazishdir
                  </p>
                  <br>
                    <div className="row">
                      <div className="col" data-animation="fade_from_bottom">
                        <ul>
                          <li>Ism: Quvonchbek</li><br>
                            <li>Familya: Bobojonov</li><br>
                              <li>Yosh: 17</li><br>
                                <li>Daraja: junior</li>
                              </ul>
                            </div>
                            <div className="col" data-animation="fade_from_bottom">
                              <ul>
                                <li>Tel: +998993833582</li><br>
                                  <li>Email: info@moorfo.uz</li><br>
                                    <li>ZIP code: 221209</li><br>
                                      <li>Manzil: Uzbekistan, Xorazm, Yangibozor, Chubalanchi</li>
                                    </ul>
                                  </div>
                                </div>
                            </div>

                          </div>
              </section>


              <section className="resume-area page-section scroll-to-page" id="resume">
                          <div className="custom-container">
                            <div className="resume-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-briefcase"></i> Resume
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">Ta'lim va
                                  <span>Tajriba</span>
                                </h1>
                              </div>

                              <div className="resume-timeline">
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                  <span className="date">2022 - hozirda</span>
                                  <h2>Front-end dasturlash.</h2>
                                  <p>IT center</p>
                                  <h2>Axborot vositalari mashinalari va kompyuter tarmoqlari operatori.</h2>
                                  <p>1-son kasb-hunar maktab</p>
                                </div>
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                  <span className="date">2020 - 2022</span>
                                  <h2>Back-end dasturlash & Kampyuter Savatxonlik.</h2>
                                  <p>IT Center</p>
                                  <h2>Front-end & Back-end dasturlash.</h2>
                                  <p>Mohirdev</p>
                                  <h2>WordPress & Django rest framework.</h2>
                                  <p>YouTube</p>
                                </div>
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                  <span className="date">2013 - 2022</span>
                                  <h2>Umumiy o'rta talim.</h2>
                                  <p>13 - maktab</p>
                                </div>
                              </div>

                            </div>
                          </div>
              </section>


                        <section className="services-area page-section scroll-to-page" id="services">
                          <div className="custom-container">
                            <div className="services-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-stream"></i> Hizmatlar
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">
                                  Sizga nimalarni <span> taklif qila olaman?</span>
                                </h1>
                              </div>

                              <div className="services-items">
                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-bezier-curve"></i>
                                  <h2>Veb sayt yaratish</h2>
                                  <p>Istalgan Turdagi Web Saytlar Tayyorlash. Masalan: Internet Magazin, Blog, Axborot
                                    Beruvchi Saytlar!</p>
                                  <span className="projects"></span>
                                </div>
                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-code"></i>
                                  <h2>Telegram bot</h2>
                                  <p>Istalgan Turdagi Telegram Bot Tayyorlash Va Uni Serverga Qo'yish. Sifatli
                                    Ko'rinishda</p>
                                  <span className="projects"></span>
                                </div>
                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-bezier-curve"></i>
                                  <h2>SEO optimallashtirish</h2>
                                  <p> Saytni Google, Yandex va boshqa qidiruv tizimlarda optimallashtirish bilan
                                    shug’ullanamiz</p>
                                  <span className="projects"></span>
                                </div>
                              </div>

                            </div>
                          </div>
                        </section>


                        <section className="skills-area page-section scroll-to-page" id="skills">
                          <div className="custom-container">
                            <div className="skills-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-shapes"></i> Bilimlar
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">
                                  Mening <span> afzalliklarim</span>
                                </h1>
                              </div>

                              <div className="row skills text-center">
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/python.png" alt="python" width="70px">
                                        <h1 className="percent">92%</h1>
                                    </div>
                                    <p className="name">Python</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/html.png" alt="html" width="70px">
                                        <h1 className="percent">85%</h1>
                                    </div>
                                    <p className="name">HTML</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/css.png" alt="CSS" width="70px">
                                        <h1 className="percent">60%</h1>
                                    </div>
                                    <p className="name">CSS</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/js.png" alt="js" width="70px">
                                        <h1 className="percent">30%</h1>
                                    </div>
                                    <p className="name">JavaScript</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/wordpress.png" alt="WordPress" width="70px">
                                        <h1 className="percent">86%</h1>
                                    </div>
                                    <p className="name">WordPress</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/django.png" alt="django" width="55px">
                                        <h1 className="percent">50%</h1>
                                    </div>
                                    <p className="name">Django</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/django-rest.png" alt="django rest framework"
                                        width="70px">
                                        <h1 className="percent">80%</h1>
                                    </div>
                                    <p className="name">django rest framework</p>
                                  </div>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="skill">
                                    <div className="skill-inner">
                                      <img src="./assets/images/pyqt.png" alt="pyqt" width="70px">
                                        <h1 className="percent">70%</h1>
                                    </div>
                                    <p className="name">PYQT</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </section>


                        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
                          <div className="custom-container">
                            <div className="portfolio-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-grip-vertical"></i> portfolio
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">
                                  Tanlangan <span>loyihalar</span>
                                </h1>
                              </div>

                              <div className="row portfolio-items">
                                <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="portfolio-item portfolio-full">
                                    <div className="portfolio-item-inner">
                                      <a href="./assets/images/portfolio1.jpg" data-lightbox="example-1">
                                        <img src="./assets/images/portfolio1.jpg" alt="Portfolio">
                                      </a>

                                      <ul className="portfolio-categories">
                                        <li>
                                          <a href="">Figma</a>
                                        </li>
                                        <li>
                                          <a href="">Framer</a>
                                        </li>
                                        <li>
                                          <a href="">WordPress</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2><a href="">Bureau - Architecture Studio Website</a></h2>
                                  </div>
                                </div>

                                <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                  <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                      <a href="./assets/images/portfolio2.jpg" data-lightbox="example-1">
                                        <img src="./assets/images/portfolio2.jpg" alt="Portfolio">
                                      </a>

                                      <img src="./assets/images/portfolio2.jpg" alt="Portfolio">

                                        <ul className="portfolio-categories">
                                          <li>
                                            <a href="">WordPress</a>
                                          </li>
                                          <li>
                                            <a href="">Larevel/PHP</a>
                                          </li>
                                        </ul>
                                    </div>
                                    <h2><a href="">Moonex WordPress Theme</a></h2>
                                  </div>
                                </div>

                                <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                  <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                      <a href="./assets/images/portfolio3.jpg" data-lightbox="example-1">
                                        <img src="./assets/images/portfolio3.jpg" alt="Portfolio">
                                      </a>

                                      <ul className="portfolio-categories">
                                        <li>
                                          <a href="">Figma</a>
                                        </li>
                                        <li>
                                          <a href="">Webflow</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2><a href="">Taskly Dashboard</a></h2>
                                  </div>
                                </div>

                                <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                      <a href="./assets/images/portfolio4.jpg" data-lightbox="example-1">
                                        <img src="./assets/images/portfolio4.jpg" alt="Portfolio">
                                      </a>

                                      <ul className="portfolio-categories">
                                        <li>
                                          <a href="">Figma</a>
                                        </li>
                                        <li>
                                          <a href="">React</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2><a href="">Hinterland - Real Estate Site Redesign</a></h2>
                                  </div>
                                </div>

                                <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                  <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                      <a href="./assets/images/portfolio5.jpg" data-lightbox="example-1">
                                        <img src="./assets/images/portfolio5.jpg" alt="Portfolio">
                                      </a>

                                      <ul className="portfolio-categories">
                                        <li>
                                          <a href="">Framer</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2><a href="">Lewis Portfolio Framer Template</a></h2>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </section>


                        {/* <!-- <section className="testimonial-area page-section scroll-to-page" id="testimonial">
                          <div className="custom-container">
                            <div className="testimonial-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="lar la-comment"></i> testimonial
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">Trusted by <span>Hundered
                                  Clients</span></h1>
                              </div>

                              <div className="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                                <div className="owl-carousel testimonial-slider owl-theme">
                                  <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                      <div className="author d-flex align-items-center">
                                        <img src="./assets/images/testimonial-1.jpg" alt="testinomial">
                                          <div className="right">
                                            <h3>Paublo Dybala</h3>
                                            <p className="designation">CEO of <span>IBM Global</span></p>
                                          </div>
                                      </div>
                                      <p>“Drake - A Developer with the creativity, professional and
                                        master of code. Much more than what i'm expect.
                                        High quality product & flexiable price. Recommended!.”</p>

                                      <a href="" className="project-btn">Project</a>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                      <div className="author d-flex align-items-center">
                                        <img src="./assets/images/testimonial-2.jpg" alt="testinomial">
                                          <div className="right">
                                            <h3>Christina Morillo</h3>
                                            <p className="designation">Product Management of <span>Invision App
                                              Inc</span></p>
                                          </div>
                                      </div>
                                      <p>“Drake was a real pleasure to work with and we look
                                        forward to working with him again. He's definitely the kind of
                                        designer that you can trust with any project from A-Z.”</p>

                                      <a href="" className="project-btn">Project</a>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                      <div className="author d-flex align-items-center">
                                        <img src="./assets/images/testimonial-3.jpg" alt="testinomial">
                                          <div className="right">
                                            <h3>Phil Foden</h3>
                                            <p className="designation">Director of <span>Envato LLC</span></p>
                                          </div>
                                      </div>
                                      <p>“Extremely profressional and fast service!. Drake is a master
                                        of code and he also very creative. We done 3 projects with
                                        him and certain will continue.”</p>

                                      <a href="" className="project-btn">Project</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-footer-nav">
                                  <div className="testimonial-nav d-flex align-items-center">
                                    <button className="prev"><i className="las la-angle-left"></i></button>
                                    <div id="testimonial-slide-count"></div>
                                    <button className="next"><i className="las la-angle-right"></i></button>
                                  </div>
                                </div>
                              </div>

                              <div className="clients-logos">
                                <h4 className="scroll-animation" data-animation="fade_from_bottom">work with 60+ brands
                                  worldwide</h4>
                                <div className="row align-items-center">
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <img src="./assets/images/client-1.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <img src="./assets/images/client-2.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <img src="./assets/images/client-3.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <img src="./assets/images/client-4.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <img src="./assets/images/client-5.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <img src="./assets/images/client-6.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <img src="./assets/images/client-7.png" alt="client">
                                  </div>
                                  <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <img src="./assets/images/client-8.png" alt="client">
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </section> */}


                        <section className="pricing-area page-section scroll-to-page" id="pricing">
                          <div className="custom-container">
                            <div className="pricing-content content-width">
                              <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                  <i className="las la-dollar-sign"></i> pricing
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span>
                                </h1>
                              </div>

                              <div className="pricing-table-items">
                                <div className="row">
                                  <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                    <div className="pricing-table">
                                      <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                          <h4>basic</h4>
                                          <p className="text-right">Have design ready to build?<br>
                                            or small budget</p>
                                        </div>
                                        <h1>$49 <span>/ hours</span></h1>
                                      </div>
                                      <ul className="feature-lists">
                                        <li>Need your wireframe</li>
                                        <li>Design with Figma, Framer</li>
                                        <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li>Remote/Online</li>
                                        <li>Work in business days, no weekend.</li>
                                        <li>Support 6 months</li>
                                      </ul>
                                      <a href="" className="theme-btn">pick this package</a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                    <div className="pricing-table">
                                      <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                          <h4>premium</h4>
                                          <p className="text-right">Not have any design?<br>
                                            Leave its for me</p>
                                        </div>
                                        <h1>$99 <span>/ hours</span></h1>
                                      </div>
                                      <ul className="feature-lists">
                                        <li>Don't need wireframe or anything</li>
                                        <li>Design with Figma, Framer from scratch</li>
                                        <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li>Remote/Online</li>
                                        <li>Work with both weekend</li>
                                        <li>Support 12 months</li>
                                        <li>Your project alway be priority</li>
                                        <li>Customer care gifts</li>
                                      </ul>
                                      <a href="" className="theme-btn">pick this package</a>
                                    </div>
                                  </div>
                                </div>
                                <p className="info scroll-animation" data-animation="fade_from_bottom">
                                  Don't find any package match with your plan!<br>
                                    Want to setup a new tailor-made package for only you?. <a href="">Contact Us</a>
                                </p>
                              </div>

                            </div>
                          </div>
                        </section> -->


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

                              <form className="contact-form scroll-animation" data-animation="fade_from_bottom" method="POST">
                                <div className="alert alert-success messenger-box-contact__msg" style="display: block" role="alert">Xabaringiz muvaffaqiyatli yuborildi.</div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <label for="full-name">to'liq ism <sup>*</sup></label>
                                      <input type="text" name="full-name" id="full-name"
                                        placeholder="To'liq ismingiz">
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <label for="email">Email <sup>*</sup></label>
                                      <input type="email" name="email" id="email"
                                        placeholder="Sizning e-pochta manzilingiz">
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <label for="phone-number">telefon <span>(ixtiyoriy)</span></label>
                                      <input type="text" name="phone-number" id="phone-number"
                                        placeholder="Telefon raqamingiz">
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <label for="subject">Mavzu <sup>*</sup></label>
                                      <input type="text" name="subject" id="subject" placeholder="Mavru kiriting">
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="input-group">
                                      <label for="budget">sizning byudjetingiz <span>(ixtiyoriy)</span></label>
                                      <input type="number" name="budget" id="budget"
                                        placeholder="Loyihangiz uchun bir qator byudjet">
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="input-group">
                                      <label for="message">xabar</label>
                                      <textarea name="message" id="message"
                                        placeholder="Xabaringizni shu yerga yozing..."></textarea>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="input-group upload-attachment">
                                      <div>
                                        <label for="upload-attachment">
                                          <i className="las la-cloud-upload-alt"></i> fayl yuklang
                                          <input type="file" name="file" id="upload-attachment">
                                        </label>

                                      </div>

                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="input-group submit-btn-wrap">
                                      <button className="theme-btn" name="submit" type="submit" id="submit-form">xabar
                                        yuborish</button>
                                    </div>
                                  </div>
                                </div>
                              </form>

                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </main>


                  {/* <script src="./assets/js/jquery.js"></script>
    <script src="./assets/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/owl.carousel.js"></script>
    <script src="./assets/js/gsap.min.js"></script>
    <script src="./assets/js/ScrollTrigger.min.js"></script>
    <script src="./assets/js/ScrollToPlugin.min.js"></script>
    <script src="./assets/js/lightbox.min.js"></script>

    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/ajax-form.js"></script>
    <script src="./assets/js/color.js"></script> */}</div>
  )
}

export default App
