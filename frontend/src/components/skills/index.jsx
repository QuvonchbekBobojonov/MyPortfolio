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
import CeleryImage from '../../assets/celery.png';

const skillsData = [
    {name: "Python", image: pythonImage, projects: "15+"},
    {name: "Django", image: DjangoImage, projects: "10+"},
    {name: "Django REST Framework", image: DjangoRestImage, projects: "8+"},
    {name: "MQTT (Broker & Client)", image: 'https://user-images.githubusercontent.com/20068373/149942025-f8282889-15e5-4f8e-a40f-dc1c2b0be4fd.png', projects: "2+"},
    {name: "JavaScript", image: JavaScriptImage, projects: "12+"},
    {name: "WordPress", image: WordPressImage, projects: "5+"},
    {name: "Docker", image: DockerImage, projects: "5+"},
    {name: "Nginx", image: NginxImage, projects: "11+"},
    {name: "PostgresSQL", image: PostgresImage, projects: "10+"},
    {name: "SQLite", image: SQLiteImage, projects: "10+"},
    {name: "Redis", image: RedisImage, projects: "3+"},
    {name: "Qt for Python (PySide6)", image: QTImage, projects: "2+"},
    {name: "Celery", image: CeleryImage, projects: "4+"},
];

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
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="col-md-3 scroll-animation"
                                data-animation="fade_from_bottom"
                            >
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={skill.image} alt={skill.name} width="70px"/>
                                        <h1 className="percent">{skill.projects}<br/> projects</h1>
                                    </div>
                                    <p className="name">{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
