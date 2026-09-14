import {assetUrl} from '../../assets';
import {useSiteData} from '../../site-data';

function Skills() {
    const {skills} = useSiteData();

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
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="col-md-3 scroll-animation"
                                data-animation="fade_from_bottom"
                            >
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={assetUrl(skill.image)} alt={skill.name} width="70px"/>
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
