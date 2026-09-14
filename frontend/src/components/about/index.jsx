import {useSiteData} from '../../site-data';

function About() {
    const {profile} = useSiteData();

    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-user"></i> About Me
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            My name is&nbsp;
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
                                <li>Name: {profile.first_name}</li>
                                <li>Surname: {profile.last_name}</li>
                                <li>Age: {profile.age}</li>
                                <li>Level: {profile.level}</li>
                                <li>Languages: {profile.languages.map((lang) => lang.name).join(', ')}</li>
                            </ul>
                        </div>
                        <div className="col scroll-animation" data-animation="fade_from_right">
                            <ul>
                                <li>Phone: {profile.phone}</li>
                                <li>Email: {profile.email}</li>
                                <li>ZIP Code: {profile.zip_code}</li>
                                <li>Address: {profile.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
