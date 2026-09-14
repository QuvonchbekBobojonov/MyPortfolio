import {useEffect, useState} from 'react'
import axios from 'axios';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {API_URL} from './api';
import {SiteDataContext} from './site-data';

import About from "./components/about"
import BodyOverlay from "./components/body-overlay"
import Contact from "./components/contact"
import Home from "./components/home"
import LeftSidebar from "./components/left-sidebar"
import LeftSidebarMobile from "./components/left-sidebar-mobile"
import PageLoader from "./components/page-loader"
import Portfolio from "./components/portfolio"
import Pricing from "./components/pricing"
import Resume from "./components/resume"
import ScrollNav from "./components/scroll-nav"
import Services from "./components/services"
import SidebarMenu from "./components/sidebar-menu"
import Skills from "./components/skills"

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/data/`)
            .then((response) => setData(response.data))
            .catch(() => setError(true));
    }, []);

    useEffect(() => {
        if (!data) return;

        const defaults = {
            duration: 1.2,
            ease: "power4.out",
            animation: "fade_from_bottom",
            once: false,
        };

        const animations = {
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
        };

        const ctx = gsap.context(() => {
            gsap.utils.toArray(".scroll-animation").forEach(box => {
                const gsapObj = {};
                const settings = {
                    duration: parseFloat(box.dataset.animationDuration) || defaults.duration,
                };
                const scrollTrigger = {
                    scrollTrigger: {
                        trigger: box,
                        once: defaults.once,
                        start: "top bottom+=20%",
                        toggleActions: "play none none reverse",
                        markers: false,
                    },
                };

                Object.assign(gsapObj, settings);
                Object.assign(gsapObj, animations[box.dataset.animation || defaults.animation]);
                Object.assign(gsapObj, scrollTrigger);
                gsap.from(box, gsapObj);
            });
        });

        return () => ctx.revert();
    }, [data]);

    return (
        <SiteDataContext.Provider value={data}>
            <div className="home-page">

                <BodyOverlay/>

                <PageLoader ready={Boolean(data)} error={error}/>

                {data && (
                    <>
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

                                    <Pricing />

                                    <Contact/>
                                </div>
                            </div>
                        </main>
                    </>
                )}
            </div>
        </SiteDataContext.Provider>
    )
}

export default App
