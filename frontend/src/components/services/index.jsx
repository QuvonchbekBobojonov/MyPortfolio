import {useSiteData} from '../../site-data';

function Services() {
    const {services} = useSiteData();

    return (
        <section className="services-area page-section scroll-to-page" id="services">
            <div className="custom-container">
                <div className="services-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-stream"></i> Services
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            What can I <span>offer you?</span>
                        </h1>
                    </div>

                    <div className="services-items">
                        {services.map((service) => (
                            <div key={service.title} className="service-item scroll-animation" data-animation="fade_from_bottom">
                                <i className={service.icon}></i>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <span className="projects">{service.projects} projects</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;
