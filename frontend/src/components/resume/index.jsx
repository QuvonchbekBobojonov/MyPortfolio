import {useEffect} from "react";
import axios from "axios";
import {env} from "../../../.eslintrc.cjs";

function Resume() {
    useEffect(() => {
        const response = axios.get(env.BASE_URL + "experience-years/");
        console.log(response);
    }, []);

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
                            <span className="date">2022 - hozirda</span>
                            <h2>Front-end dasturlash.</h2>
                            <p>IT center</p>
                            <h2>Axborot vositalari mashinalari va kompyuter tarmoqlari operatori.</h2>
                            <p>1-son kasb-hunar maktab</p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2020 - 2022</span>
                            <h2>Back-end dasturlash & Kampyuter Savatxonlik.</h2>
                            <p>IT Center</p>
                            <h2>Front-end & Back-end dasturlash.</h2>
                            <p>Mohirdev</p>
                            <h2>WordPress & Django rest framework.</h2>
                            <p>YouTube</p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2013 - 2022</span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2>Umumiy o'rta talim.</h2>
                            <p>13 - maktab</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;