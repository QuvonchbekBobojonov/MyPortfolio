import React from 'react';

function ScrollNav(props) {
    return (
        <ul className="menu scroll-nav d-flex">
            <li>
                <a className="scroll-to" href="#home">
                    <span>Asosy</span> <i className="las la-home"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#about">
                    <span>Haqida</span> <i className="lar la-user"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#resume">
                    <span>Resume</span> <i className="las la-briefcase"></i>
                </a>
            </li>
            <li>
                <a href="#services">
                    <span>Xizmatlar</span> <i className="las la-stream"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#skills">
                    <span>Bilimlar</span> <i className="las la-shapes"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#portfolio">
                    <span>Portfolio</span> <i className="las la-grip-vertical"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#contact">
                    <span>Bog'lanish</span> <i className="las la-envelope"></i>
                </a>
            </li>
        </ul>
    );
}

export default ScrollNav;