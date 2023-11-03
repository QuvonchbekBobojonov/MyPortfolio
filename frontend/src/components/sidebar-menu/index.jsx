import React from 'react';

function SidebarMenu() {
    return (
        <div className="responsive-sidebar-menu">
            <div className="overlay"></div>
            <div className="sidebar-menu-inner">
                <div className="menu-wrap">
                    <p>Menu</p>
                    <ul className="menu scroll-nav-responsive d-flex">
                        <li>
                            <a className="scroll-to" href="#home">
                                <i className="las la-home"></i> <span>Asosy</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#about">
                                <i className="lar la-user"></i> <span>Haqida</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#resume">
                                <i className="las la-briefcase"></i> <span>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#services">
                                <i className="las la-stream"></i> <span>Xizmatlar</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#skills">
                                <i className="las la-shapes"></i> <span>Bilimlar</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#portfolio">
                                <i className="las la-grip-vertical"></i> <span>Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#contact">
                                <i className="las la-envelope"></i> <span>Bog'lanish</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-social">
                    <p>Ijtimoiy Sahifalar</p>
                    <ul className="social-links d-flex align-items-center">
                        <li>
                            <a href=""><i className="lab la-telegram"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="lab la-github"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="lab la-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarMenu;