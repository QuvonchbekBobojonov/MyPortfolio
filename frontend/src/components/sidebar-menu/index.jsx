import { useState } from 'react';

function SidebarMenu() {
    const [menu, setMenu] = useState(false);

    const openMenu = () => setMenu(!menu);

    return (
        <>
            <span className="icon-menu" onClick={openMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
            </span>

            <div className={`responsive-sidebar-menu ${menu ? 'active' : ''}`}>
                <div className="overlay" onClick={openMenu}></div>
                <div className="sidebar-menu-inner">
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex">
                            <li>
                                <a className="scroll-to" href="#home">
                                    <i className="las la-home"></i> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#about">
                                    <i className="lar la-user"></i> <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#resume">
                                    <i className="las la-briefcase"></i> <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#services">
                                    <i className="las la-stream"></i> <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#skills">
                                    <i className="las la-shapes"></i> <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#portfolio">
                                    <i className="las la-grip-vertical"></i> <span>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#contact">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <i className="las la-envelope"></i> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-social">
                        <p>Social Media</p>
                        <ul className="social-links d-flex align-items-center">
                            <li>
                                <a href="https://t.me/QuvonchbekBobojonov" target="_blank" rel="noreferrer">
                                    <i className="lab la-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/QuvonchbekBobojonov" target="_blank" rel="noreferrer">
                                    <i className="lab la-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/moorfo/" target="_blank" rel="noreferrer">
                                    <i className="lab la-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarMenu;
