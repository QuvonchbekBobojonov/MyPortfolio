import React from 'react';

function Skills(props) {
    return (
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
                                    <img src="./assets/images/python.png" alt="python" width="70px" />
                                    <h1 className="percent">92%</h1>
                                </div>
                                <p className="name">Python</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/html.png" alt="html" width="70px" />
                                    <h1 className="percent">85%</h1>
                                </div>
                                <p className="name">HTML</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/css.png" alt="CSS" width="70px" />
                                    <h1 className="percent">60%</h1>
                                </div>
                                <p className="name">CSS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/js.png" alt="js" width="70px" />
                                    <h1 className="percent">30%</h1>
                                </div>
                                <p className="name">JavaScript</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/wordpress.png" alt="WordPress" width="70px" />
                                    <h1 className="percent">86%</h1>
                                </div>
                                <p className="name">WordPress</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/django.png" alt="django" width="55px" />
                                    <h1 className="percent">50%</h1>
                                </div>
                                <p className="name">Django</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/django-rest.png" alt="django rest framework" width="70px" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">django rest framework</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/pyqt.png" alt="pyqt" width="70px" />
                                    <h1 className="percent">70%</h1>
                                </div>
                                <p className="name">PYQT</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;