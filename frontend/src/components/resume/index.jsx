import {useSiteData} from '../../site-data';

const renderTimelineItem = (item, key) => (
    <div key={key} className="item scroll-animation" data-animation="fade_from_right">
        <span className="date">{item.date}</span>
        <h2>{item.title}</h2>
        <p>{item.location ? `${item.place} (${item.location})` : item.place}</p>
    </div>
);

function Resume() {
    const {experience, education, ui} = useSiteData();

    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header scroll-animation" data-animation="fade_from_bottom">
                        <h4 className="subtitle">
                            <i className="las la-briefcase"></i> {ui.nav.resume}
                        </h4>
                        <h1>
                            {ui.resume.title[0]}&nbsp;<span>{ui.resume.title[1]}</span>
                        </h1>
                    </div>

                    <div className="resume-timeline">
                        {/* --- Experience Section --- */}
                        {experience.map((item, index) => renderTimelineItem(item, `experience-${index}`))}

                        {/* --- Education Section --- */}
                        {education.map((item, index) => renderTimelineItem(item, `education-${index}`))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
