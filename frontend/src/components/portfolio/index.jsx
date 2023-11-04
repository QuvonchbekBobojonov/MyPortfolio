import portfolioImage1 from '../../assets/images/portfolio1.jpg'
import portfolioImage2 from '../../assets/images/portfolio2.jpg'
import portfolioImage3 from '../../assets/images/portfolio3.jpg'
import portfolioImage4 from '../../assets/images/portfolio4.jpg'
import portfolioImage5 from '../../assets/images/portfolio5.jpg'

function Portfolio() {
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-grip-vertical"></i> portfolio
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Tanlangan <span>loyihalar</span>
                        </h1>
                    </div>

                    <div className="row portfolio-items">
                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage1} data-lightbox="example-1">
                                        <img src={portfolioImage1} alt="Portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Figma</a>
                                        </li>
                                        <li>
                                            <a href="">Framer</a>
                                        </li>
                                        <li>
                                            <a href="">WordPress</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="">Bureau - Architecture Studio Website</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage2} data-lightbox="example-1">
                                        <img src={portfolioImage2} alt="Portfolio" />
                                    </a>

                                    <img src={portfolioImage2} alt="Portfolio" />

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">WordPress</a>
                                        </li>
                                        <li>
                                            <a href="">Larevel/PHP</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="">Moonex WordPress Theme</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage3} data-lightbox="example-1">
                                        <img src={portfolioImage3} alt="Portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Figma</a>
                                        </li>
                                        <li>
                                            <a href="">Webflow</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="">Taskly Dashboard</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage4} data-lightbox="example-1">
                                        <img src={portfolioImage4} alt="Portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Figma</a>
                                        </li>
                                        <li>
                                            <a href="">React</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="">Hinterland - Real Estate Site Redesign</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage5} data-lightbox="example-1">
                                        <img src={portfolioImage5} alt="Portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Framer</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="">Lewis Portfolio Framer Template</a></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;