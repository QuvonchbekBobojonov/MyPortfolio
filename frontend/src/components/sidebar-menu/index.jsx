import { useState } from 'react';

function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const menuItems = [
        { id: 'home', icon: 'las la-home', label: 'Home' },
        { id: 'about', icon: 'lar la-user', label: 'About' },
        { id: 'resume', icon: 'las la-briefcase', label: 'Resume' },
        { id: 'services', icon: 'las la-stream', label: 'Services' },
        { id: 'skills', icon: 'las la-shapes', label: 'Skills' },
        { id: 'portfolio', icon: 'las la-grip-vertical', label: 'Portfolio' },
        { id: 'contact', icon: 'las la-envelope', label: 'Contact' },
    ];

    const socialLinks = [
        { href: 'https://t.me/+998774040066', icon: 'lab la-telegram', label: 'Telegram' },
        { href: 'https://github.com/QuvonchbekBobojonov', icon: 'lab la-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/moorfo/', icon: 'lab la-linkedin-in', label: 'LinkedIn' },
    ];

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                className={`icon-menu ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
            >
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Sidebar Menu */}
            <div className={`responsive-sidebar-menu ${isOpen ? 'active' : ''}`}>
                <div className="overlay" onClick={toggleMenu}></div>

                <nav className="sidebar-menu-inner" aria-label="Sidebar Navigation">
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex flex-column">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        className="scroll-to"
                                        href={`#${item.id}`}
                                        onClick={toggleMenu}
                                    >
                                        <i className={item.icon}></i> <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-social">
                        <p>Social Media</p>
                        <ul className="social-links d-flex align-items-center">
                            {socialLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default SidebarMenu;
