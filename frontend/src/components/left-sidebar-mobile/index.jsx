import logo from '../../assets/moorfo.svg';
import meImage from '../../assets/me.jpg';

function LeftSidebarMobile() {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src={logo} alt="Logo" width="150px" />
                <span className="designation"></span>
            </div>
            <img className="me" src={meImage} alt="Me" />
            <h2 className="email">hi@moorfo.uz</h2>
            <h2 className="address">Uzbekistan, Khorezm, Yangibozor</h2>
            <p className="copyright">
                &copy; {new Date().getFullYear()} Moorfo. All rights reserved.
            </p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://www.linkedin.com/in/moorfo/" target="_blank" rel="noreferrer">
                        <i className="lab la-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/QuvonchbekBobojonov" target="_blank" rel="noreferrer">
                        <i className="lab la-telegram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/moorfo.uz?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noreferrer">
                        <i className="lab la-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/QuvonchbekBobojonov" target="_blank" rel="noreferrer">
                        <i className="lab la-github"></i>
                    </a>
                </li>
            </ul>
            <a href="https://quvonchbek_bobojonov.t.me/" target="_blank" className="theme-btn" rel="noreferrer">
                <i className="las la-envelope"></i> Contact
            </a>
        </div>
    );
}

export default LeftSidebarMobile;
