import React from 'react';

function Services() {
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
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-bezier-curve"></i>
                            <h2>Website Development</h2>
                            <p>Creating websites of any type, such as online stores, blogs, and informational websites!</p>
                            <span className="projects">12+ projects</span>
                        </div>
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-code"></i>
                            <h2>Telegram Bot Development</h2>
                            <p>Developing Telegram bots of any kind and deploying them on a server with a professional appearance.</p>
                            <span className="projects">20+ projects</span>
                        </div>
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-search"></i>
                            <h2>SEO Optimization</h2>
                            <p>Improving website visibility in Google, Yandex, and other search engines.</p>
                            <span className="projects">5+ projects</span>
                        </div>
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-desktop"></i>
                            <h2>Desktop Application Development</h2>
                            <p>Creating cross-platform desktop applications using PySide6.</p>
                            <span className="projects">2+ projects</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;
