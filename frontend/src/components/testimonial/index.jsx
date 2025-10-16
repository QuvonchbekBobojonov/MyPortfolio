

function Testimonial() {
    return (
        <section className="testimonial-area page-section scroll-to-page" id="testimonial">
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
                                        <img src="./assets/images/testimonial-1.jpg" alt="testinomial" />
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
                                        <img src="./assets/images/testimonial-2.jpg" alt="testinomial" />
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
                                        <img src="./assets/images/testimonial-3.jpg" alt="testinomial" />
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
                                <img src="./assets/images/client-1.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <img src="./assets/images/client-2.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                <img src="./assets/images/client-3.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <img src="./assets/images/client-4.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                <img src="./assets/images/client-5.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <img src="./assets/images/client-6.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                <img src="./assets/images/client-7.png" alt="client" />
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <img src="./assets/images/client-8.png" alt="client" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonial;