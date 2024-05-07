
function Resume() {
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-briefcase"></i> Resume
                        </h4>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Ta'lim va&nbsp;
                            <span>Tajriba</span>
                        </h1>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2023 - hozirda</span>
                            <h2>Back-end dasturchi.</h2>
                            <p>TOTMEGA MCHJ</p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2022 - hozirda</span>
                            <h2>Axborot vositalari mashinalari va kompyuter tarmoqlari operatori.</h2>
                            <p>1-son kasb-hunar maktab (Yangibozor tumani)</p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2022 - 2023</span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2>Front-end dasturlash kursi o'quvchi.</h2>
                            <p>IT Park (Yangibozor tumani)</p>
                            <h2>Python Backend</h2>
                            <p>Fulfil Education</p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2020 - 2022</span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2>Back-end dasturlash & Kampyuter Savatxonlik kursi o'quvchi.</h2>
                            <p>IT Park (Yangibozor tumani)</p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2>Front-end & Back-end dasturlash kursi o'quvchi.</h2>
                            <p>Mohirdev</p>
                            <h2>WordPress & Django rest framework.</h2>
                            <p>YouTube</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;