import portfolioImage1 from '../../assets/portfolio/1.png';
import portfolioImage2 from '../../assets/portfolio/2.png';
import portfolioImage3 from '../../assets/portfolio/3.jpg';

function Portfolio() {
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-grip-vertical"></i> Portfolio
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Featured <span>Projects</span>
                        </h1>
                    </div>

                    <div className="row portfolio-items">
                        {/* Megalife Project */}
                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage3} data-lightbox="example-1">
                                        <img src={portfolioImage3} alt="Megalife Project" loading="lazy" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        {["Django", "Django Rest Framework", "MQTT", "JavaScript", "QT"].map((tech) => (
                                            <li key={tech}>
                                                <a href="#">{tech}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <h2>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        Megalife - Water Automation Selling Device
                                    </a>
                                </h2>
                            </div>
                        </div>

                        {/* MedControl Project */}
                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage1} data-lightbox="example-1">
                                        <img src={portfolioImage1} alt="MedControl Project" loading="lazy" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        {["Django", "Django Rest Framework", "Django Channels", "JavaScript"].map(
                                            (tech) => (
                                                <li key={tech}>
                                                    <a href="#">{tech}</a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <h2>
                                    <a href="https://apteka.medcontrol.uz/" target="_blank" rel="noopener noreferrer">
                                        MedControl Apteka - Medical Control System
                                    </a>
                                </h2>
                            </div>
                        </div>

                        {/* MakeMoney Project */}
                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage2} data-lightbox="example-1">
                                        <img src={portfolioImage2} alt="MakeMoney Project" loading="lazy" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        {["Django", "Django Rest Framework", "JavaScript"].map((tech) => (
                                            <li key={tech}>
                                                <a href="#">{tech}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <h2>
                                    <a href="https://makemoney.uz/uz/" target="_blank" rel="noopener noreferrer">
                                        MakeMoney - Online Money Earn System
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
