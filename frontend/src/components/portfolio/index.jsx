import portfolioImage1 from '../../assets/portfolio/1.png'
import portfolioImage2 from '../../assets/portfolio/2.png'
import portfolioImage3 from '../../assets/portfolio/3.jpg'

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
                                    <a href={portfolioImage3} data-lightbox="example-1">
                                        <img src={portfolioImage3} alt="Portfolio"/>
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Django</a>
                                        </li>
                                        <li>
                                            <a href="">Django Rest Framework</a>
                                        </li>
                                        <li>
                                            <a href="">MQTT</a>
                                        </li>
                                        <li>
                                            <a href="">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="">QT</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="/" target={'_blank'}>Megalife - Water automation selling device</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage1} data-lightbox="example-1">
                                        <img src={portfolioImage1} alt="Portfolio"/>
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Django</a>
                                        </li>
                                        <li>
                                            <a href="">Django Rest Framework</a>
                                        </li>
                                        <li>
                                            <a href="">Django Channels</a>
                                        </li>
                                        <li>
                                            <a href="">JavaScript</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://apteka.medcontrol.uz/" target={'_blank'}>MedControl apteka -
                                    Medical Control
                                    System</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href={portfolioImage2} data-lightbox="example-1">
                                        <img src={portfolioImage2} alt="Portfolio"/>
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="">Django</a>
                                        </li>
                                        <li>
                                            <a href="">Django Rest Framework</a>
                                        </li>
                                        <li>
                                            <a href="">JavaScript</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://makemoney.uz/uz/" target={'_blank'}>MakeMoney - Online Money Earn
                                    System</a></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;