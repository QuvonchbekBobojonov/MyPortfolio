import About from '../about';
import Contact from '../contact';
import Home from '../home';
import LanguageSwitcher from '../language-switcher';
import LeftSidebar from '../left-sidebar';
import LeftSidebarMobile from '../left-sidebar-mobile';
import Portfolio from '../portfolio';
import Pricing from '../pricing';
import Resume from '../resume';
import ScrollNav from '../scroll-nav';
import Services from '../services';
import SidebarMenu from '../sidebar-menu';
import Skills from '../skills';

// Brauzerda (App) ham, build vaqtidagi prerender'da (entry-server) ham bir xil chiziladigan qism.
function SiteContent() {
    return (
        <>
            <LanguageSwitcher/>

            <SidebarMenu/>

            <ScrollNav/>

            <LeftSidebar/>

            <main className="drake-main">
                <div id="smooth-wrapper">
                    <div id="smooth-content">

                        <LeftSidebarMobile/>

                        <Home/>

                        <About/>

                        <Resume/>

                        <Services/>

                        <Skills/>

                        <Portfolio/>

                        <Pricing/>

                        <Contact/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default SiteContent;
