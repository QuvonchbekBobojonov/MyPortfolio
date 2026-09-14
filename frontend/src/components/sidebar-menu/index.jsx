import { useState } from 'react';
import { useSiteData } from '../../site-data';

function SidebarMenu() {
    const { socials } = useSiteData();
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
                            {socials.map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.name}
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
