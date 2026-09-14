import {useCallback, useEffect, useState} from 'react'
import axios from 'axios';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {API_URL} from './api';
import {
    LanguageContext,
    SiteDataContext,
    languageFromPath,
    pathForLanguage,
    preferredLanguage,
    saveLanguage,
} from './site-data';

import BodyOverlay from "./components/body-overlay"
import PageLoader from "./components/page-loader"
import SiteContent from "./components/site-content"

gsap.registerPlugin(ScrollTrigger);

// Til URL'dan olinadi. Faqat bosh sahifada (/) avval tanlangan yoki brauzer tiliga o'tkaziladi.
function initialLanguage() {
    const fromPath = languageFromPath(window.location.pathname);
    if (window.location.pathname !== '/') return fromPath;

    const preferred = preferredLanguage();
    if (preferred && preferred !== fromPath) {
        window.history.replaceState(null, '', pathForLanguage(preferred) + window.location.hash);
        return preferred;
    }
    return fromPath;
}

function App() {
    const [lang, setLang] = useState(initialLanguage);
    // Prerender qilingan sahifa ma'lumotni HTML ichida olib keladi, shuning uchun kontent darhol chiqadi.
    const [data, setData] = useState(() => (window.__SITE_DATA__?.lang === lang ? window.__SITE_DATA__ : null));
    const [error, setError] = useState(false);
    const dataLang = data?.lang;

    // Build vaqtidagi nusxa eskirgan bo'lishi mumkin, shuning uchun backend'dan har doim yangisi olinadi.
    useEffect(() => {
        let ignore = false;
        document.documentElement.lang = lang;

        axios.get(`${API_URL}/data/`, {params: {lang}})
            .then((response) => {
                if (!ignore) setData(response.data);
            })
            .catch(() => {
                if (!ignore) setError(true);
            });

        return () => {
            ignore = true;
        };
    }, [lang]);

    useEffect(() => {
        const onPopState = () => setLang(languageFromPath(window.location.pathname));
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    useEffect(() => {
        if (!data?.seo) return;
        document.title = data.seo.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', data.seo.description);
        document.querySelector('link[rel="canonical"]')
            ?.setAttribute('href', data.profile.website.replace(/\/$/, '') + pathForLanguage(data.lang));
    }, [data]);

    const changeLanguage = useCallback((code) => {
        if (code === lang) return;
        saveLanguage(code);
        window.history.pushState(null, '', pathForLanguage(code) + window.location.hash);
        setLang(code);
    }, [lang]);

    useEffect(() => {
        if (!dataLang) return;

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
    }, [dataLang]);

    return (
        <LanguageContext.Provider value={{lang, setLang: changeLanguage}}>
        <SiteDataContext.Provider value={data}>
            <div className="home-page">

                <BodyOverlay/>

                <PageLoader ready={Boolean(data)} error={error && !data}/>

                {data && <SiteContent/>}
            </div>
        </SiteDataContext.Provider>
        </LanguageContext.Provider>
    )
}

export default App
