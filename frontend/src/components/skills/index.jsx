import pythonImage from '../../assets/python.png';
import JavaScriptImage from '../../assets/js.png';
import WordPressImage from '../../assets/wordpress.png';
import DjangoImage from '../../assets/django.png';
import DjangoRestImage from '../../assets/django-rest.png';
import QTImage from '../../assets/pyqt.png';
import DockerImage from '../../assets/docker.png';
import NginxImage from '../../assets/nginx.png';
import PostgresImage from '../../assets/postgresql.png';
import SQLiteImage from '../../assets/sqlite.png';
import RedisImage from '../../assets/redis.png';

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
                            My <span> Technical Strengths</span>
                        </h1>
                    </div>

                    <div className="row skills text-center">

                        {/* Python */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={pythonImage} alt="Python" width="70px" />
                                    <h1 className="percent">15+<br/> projects</h1>
                                </div>
                                <p className="name">Python</p>
                            </div>
                        </div>

                        {/* Django */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={DjangoImage} alt="Django" width="60px" />
                                    <h1 className="percent">10+<br/> projects</h1>
                                </div>
                                <p className="name">Django</p>
                            </div>
                        </div>

                        {/* Django REST Framework */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={DjangoRestImage} alt="Django REST Framework" width="70px" />
                                    <h1 className="percent">8+<br/> projects</h1>
                                </div>
                                <p className="name">Django REST Framework</p>
                            </div>
                        </div>

                        {/* Qt for Python */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={QTImage} alt="Qt for Python" width="70px" />
                                    <h1 className="percent">2+<br/> projects</h1>
                                </div>
                                <p className="name">Qt for Python (PySide6)</p>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={JavaScriptImage} alt="JavaScript" width="70px" />
                                    <h1 className="percent">12+<br/> projects</h1>
                                </div>
                                <p className="name">JavaScript</p>
                            </div>
                        </div>

                        {/* WordPress */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={WordPressImage} alt="WordPress" width="70px" />
                                    <h1 className="percent">5+<br/> projects</h1>
                                </div>
                                <p className="name">WordPress</p>
                            </div>
                        </div>

                        {/* Docker */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={DockerImage} alt="Docker" width="70px" />
                                    <h1 className="percent">5+<br/> projects</h1>
                                </div>
                                <p className="name">Docker</p>
                            </div>
                        </div>

                        {/* Nginx */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={NginxImage} alt="Nginx" width="70px" />
                                    <h1 className="percent">5+<br/> projects</h1>
                                </div>
                                <p className="name">Nginx</p>
                            </div>
                        </div>

                        {/* PostgreSQL */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={PostgresImage} alt="PostgreSQL" width="70px" />
                                    <h1 className="percent">10+<br/> projects</h1>
                                </div>
                                <p className="name">PostgreSQL</p>
                            </div>
                        </div>

                        {/* SQLite */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={SQLiteImage} alt="SQLite" width="70px" />
                                    <h1 className="percent">10+<br/> projects</h1>
                                </div>
                                <p className="name">SQLite</p>
                            </div>
                        </div>

                        {/* Redis */}
                        <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src={RedisImage} alt="Redis" width="70px" />
                                    <h1 className="percent">3+<br/> projects</h1>
                                </div>
                                <p className="name">Redis</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
