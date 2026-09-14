import logo from '../../assets/moorfo.svg';
import meImage from '../../assets/me.jpg';
import {CV_URL} from '../../api';
import {useSiteData} from '../../site-data';

function LeftSidebar() {
    const {profile, socials} = useSiteData();

    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src={logo} alt="Logo" width="150" />
                <span className="designation">{profile.title}</span>
            </div>
            <img className="me" src={meImage} alt="Me" />
            <h2 className="email">{profile.email}</h2>
            <h2 className="address">{profile.location}</h2>
            <p className="copyright">
                &copy; 2023 - {new Date().getFullYear()} Moorfo. All rights reserved.
            </p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                {socials.map((social) => (
                    <li key={social.url}>
                        <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.name}>
                            <i className={social.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
            <a href={CV_URL} className="theme-btn" download>
                <i className="las la-download"></i> Download CV
            </a>
        </div>
    );
}

export default LeftSidebar;
