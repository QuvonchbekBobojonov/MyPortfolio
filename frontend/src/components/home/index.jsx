import {useSiteData} from '../../site-data';

function Home() {
    const {profile, ui} = useSiteData();
    const t = ui.home;

    return (
        <section className="hero-section page-section scroll-to-page" id="home">
            <div className="custom-container">
                <div className="hero-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-home"></i> {t.subtitle}
                        </h4>
                        <h1 className="scroll-animation title" data-animation="fade_from_bottom">{t.title[0]} &nbsp;
                            <span>{t.title[1]}</span>
                        </h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">
                        {profile.hero_text}
                    </p>

                    <div className="facts d-flex">
                        <div className="left scroll-animation" data-animation="fade_from_left">
                            <h1>{profile.experience_years}+</h1>
                            <p>{t.experience}</p>
                        </div>
                        <div className="right scroll-animation" data-animation="fade_from_right">
                            <h1>{profile.projects_count}</h1>
                            <p>{t.projects}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
