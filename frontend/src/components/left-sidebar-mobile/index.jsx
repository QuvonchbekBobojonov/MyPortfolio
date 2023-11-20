import logo from '../../assets/moorfo.svg';
import meImage from '../../assets/me.jpg';

function LeftSidebarMobile(props) {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src={logo} alt="Logo" width="150px" />
                <span className="designation">Full stack developer</span>
            </div>
            <img className="me" src={meImage} alt="Me" />
            <h2 className="email">info@moorfo.uz</h2>
            <h2 className="address">Uzbekistan, Xorazm, Yangibozor</h2>
            <p className="copyright">&copy; 2023 Moorfo. Barcha huquqlar himoyalangan</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i className="lab la-dribbble"></i></a>
                </li>
                <li>
                    <a href="#"><i className="lab la-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i className="lab la-github"></i></a>
                </li>
            </ul>
            <a href="#" className="theme-btn">
                <i className="las la-envelope"></i> Bog'lanish
            </a>
        </div>
    );
}

export default LeftSidebarMobile;