
function Pricing() {
    return (
        <section className="pricing-area page-section scroll-to-page" id="pricing">
            <div className="custom-container">
                <div className="pricing-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> pricing
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span>
                        </h1>
                    </div>

                    <div className="pricing-table-items">
                        <div className="row">
                            <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                <div className="pricing-table">
                                    <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                            <h4>basic</h4>
                                            <p className="text-right">Have design ready to build?<br />
                                                or small budget</p>
                                        </div>
                                        <h1>$49 <span>/ hours</span></h1>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Need your wireframe</li>
                                        <li>Design with Figma, Framer</li>
                                        <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li>Remote/Online</li>
                                        <li>Work in business days, no weekend.</li>
                                        <li>Support 6 months</li>
                                    </ul>
                                    <a href="" className="theme-btn">pick this package</a>
                                </div>
                            </div>
                            <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                <div className="pricing-table">
                                    <div className="pricing-table-header">
                                        <div className="top d-flex justify-content-between align-items-start">
                                            <h4>premium</h4>
                                            <p className="text-right">Not have any design?<br />
                                                Leave its for me</p>
                                        </div>
                                        <h1>$99 <span>/ hours</span></h1>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Don't need wireframe or anything</li>
                                        <li>Design with Figma, Framer from scratch</li>
                                        <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li>Remote/Online</li>
                                        <li>Work with both weekend</li>
                                        <li>Support 12 months</li>
                                        <li>Your project alway be priority</li>
                                        <li>Customer care gifts</li>
                                    </ul>
                                    <a href="" className="theme-btn">pick this package</a>
                                </div>
                            </div>
                        </div>
                        <p className="info scroll-animation" data-animation="fade_from_bottom">
                            Don't find any package match with your plan!<br />
                                Want to setup a new tailor-made package for only you?. <a href="">Contact Us</a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Pricing;