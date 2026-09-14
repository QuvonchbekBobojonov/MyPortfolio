import {useSiteData} from '../../site-data';

function Pricing() {
    const {pricing, profile} = useSiteData();
    const phoneLink = `tel:${profile.phone_link}`;

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
                            {pricing.packages.map((pkg, index) => (
                                <div
                                    key={pkg.name}
                                    className="col-md-6 scroll-animation"
                                    data-animation={index % 2 === 0 ? 'fade_from_left' : 'fade_from_right'}
                                >
                                    <div className="pricing-table">
                                        <div className="pricing-table-header">
                                            <div className="top d-flex justify-content-between align-items-start">
                                                <h4>{pkg.name}</h4>
                                                <p className="text-right">
                                                    {pkg.tagline[0]}<br />
                                                    {pkg.tagline[1]}
                                                </p>
                                            </div>
                                            <h1>{pkg.price} <span>{pkg.unit}</span></h1>
                                        </div>
                                        <ul className="feature-lists">
                                            {pkg.features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                        <a href={phoneLink} className="theme-btn">Pick this package</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Custom Package */}
                        <p className="info scroll-animation" data-animation="fade_from_bottom">
                            {pricing.note[0]}<br />
                            {pricing.note[1]} <a href={phoneLink}>Contact Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
