function Pricing() {
    return (
        <section className="pricing-area page-section scroll-to-page" id="pricing">
            <div className="custom-container">
                <div className="pricing-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> Pricing
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span></h1>
                    </div>

                    <div className="pricing-table-items">
                        <div className="row">
                            {/* Basic Package */}
                            <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                <div className="pricing-table">
                                    <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                            <h4>Basic</h4>
                                            <p className="text-right">
                                                Simple projects & startups<br />
                                                Budget-friendly solution
                                            </p>
                                        </div>
                                        <h1>$10 <span>/ hour</span></h1>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Backend development with Django & DRF</li>
                                        <li>Basic API integrations (REST & WebSocket)</li>
                                        <li>Simple desktop applications (PySide6 / Qt)</li>
                                        <li>Basic Telegram bot development</li>
                                        <li>Small automation scripts & services</li>
                                        <li>Work on business days, no weekends</li>
                                        <li>Support for 3 months</li>
                                    </ul>
                                    <a href="#" className="theme-btn">Pick this package</a>
                                </div>
                            </div>

                            {/* Premium Package */}
                            <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                <div className="pricing-table">
                                    <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                            <h4>Premium</h4>
                                            <p className="text-right">
                                                Complex & enterprise solutions<br />
                                                Full project development
                                            </p>
                                        </div>
                                        <h1>$19 <span>/ hour</span></h1>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Advanced Django & Django Rest Framework development</li>
                                        <li>Complex API development (GraphQL, MQTT, WebSockets)</li>
                                        <li>Full-stack applications (Backend + Frontend with React or Qt)</li>
                                        <li>Enterprise-grade automation & IoT integration</li>
                                        <li>Advanced Telegram bot & AI-powered automation</li>
                                        <li>Works on weekends & priority support</li>
                                        <li>12-months support & maintenance</li>
                                        <li>Project always has priority</li>
                                    </ul>
                                    <a href="#" className="theme-btn">Pick this package</a>
                                </div>
                            </div>
                        </div>

                        {/* Custom Package */}
                        <p className="info scroll-animation" data-animation="fade_from_bottom">
                            Need a custom solution for your unique project?<br />
                            Let's discuss and build a tailor-made package just for you. <a href="#">Contact Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
