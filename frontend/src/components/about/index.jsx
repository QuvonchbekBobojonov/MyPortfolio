import {useSiteData} from '../../site-data';

function About() {
    const {profile, ui} = useSiteData();
    const t = ui.about;

    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-user"></i> {t.subtitle}
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            {t.title}&nbsp;
                            <span>{profile.full_name}</span>
                        </h1>
                    </div>
                    {profile.summary.map((paragraph, index) => (
                        <p key={index} className="scroll-animation" data-animation="fade_from_bottom">
                            {paragraph}
                        </p>
                    ))}
                    <div className="row mt-3 scroll-animation row-cols-1 row-cols-md-2" data-animation="fade_from_bottom">
                        <div className="col scroll-animation" data-animation="fade_from_left">
                            <ul>
                                <li>{t.name}: {profile.first_name}</li>
                                <li>{t.surname}: {profile.last_name}</li>
                                <li>{t.age}: {profile.age}</li>
                                <li>{t.level}: {profile.level}</li>
                                <li>{t.languages}: {profile.languages.map((lang) => lang.name).join(', ')}</li>
                            </ul>
                        </div>
                        <div className="col scroll-animation" data-animation="fade_from_right">
                            <ul>
                                <li>{t.phone}: {profile.phone}</li>
                                <li>{t.email}: {profile.email}</li>
                                <li>{t.zip}: {profile.zip_code}</li>
                                <li>{t.address}: {profile.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
