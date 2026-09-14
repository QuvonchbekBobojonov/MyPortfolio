import {useSiteData} from '../../site-data';

const navItems = [
    {id: 'home', icon: 'las la-home'},
    {id: 'about', icon: 'lar la-user'},
    {id: 'resume', icon: 'las la-briefcase'},
    {id: 'services', icon: 'las la-stream'},
    {id: 'skills', icon: 'las la-shapes'},
    {id: 'portfolio', icon: 'las la-grip-vertical'},
    {id: 'contact', icon: 'las la-envelope'},
];

function ScrollNav() {
    const {ui} = useSiteData();

    return (
        <ul className="menu scroll-nav d-flex">
            {navItems.map((item) => (
                <li key={item.id}>
                    <a className="scroll-to" href={`#${item.id}`}>
                        <span>{ui.nav[item.id]}</span> <i className={item.icon}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ScrollNav;
