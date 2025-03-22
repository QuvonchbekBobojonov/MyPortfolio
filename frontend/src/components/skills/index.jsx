import pythonImage from '../../assets/python.png';
import HTMLImage from '../../assets/html.png';
import CSSImage from '../../assets/css.png';
import JavaScriptImage from '../../assets/js.png';
import WordPressImage from '../../assets/wordpress.png';
import DjangoImage from '../../assets/django.png';
import DjangoRestImage from '../../assets/django-rest.png';
import QTImage from '../../assets/pyqt.png';
import AiogramImage from '../../assets/aiogram.png';
import IoTImage from '../../assets/iot.png';

function Skills() {
    return (
        <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-shapes"></i> Skills
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            My <span> Advantages</span>
                        </h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={pythonImage} alt="python" width="70px" />
                                    <h1 className="percent">15+<br/> projects</h1>
                                </div>
                                <p className="name">Python</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={DjangoImage} alt="django" width="55px" />
                                    <h1 className="percent">10+<br/> projects</h1>
                                </div>
                                <p className="name">Django</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={DjangoRestImage} alt="django rest framework" width="70px" />
                                    <h1 className="percent">8+<br/> projects</h1>
                                </div>
                                <p className="name">Django Rest Framework</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={AiogramImage} alt="aiogram" width="70px" />
                                    <h1 className="percent">6+<br/> projects</h1>
                                </div>
                                <p className="name">Aiogram</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={QTImage} alt="pyqt" width="70px" />
                                    <h1 className="percent">2+<br/> projects</h1>
                                </div>
                                <p className="name">PyQt</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={IoTImage} alt="iot" width="70px" />
                                    <h1 className="percent">4+<br/> projects</h1>
                                </div>
                                <p className="name">IoT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
