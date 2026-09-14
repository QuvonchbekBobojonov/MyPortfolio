// Faqat build vaqtida Node'da ishlaydi, HMR (Fast Refresh) bu faylga tegishli emas.
/* eslint-disable react-refresh/only-export-components */
import ReactDOMServer from 'react-dom/server';

import BodyOverlay from './components/body-overlay';
import PageLoader from './components/page-loader';
import SiteContent from './components/site-content';
import {LanguageContext, SiteDataContext} from './site-data';

export {DEFAULT_LANGUAGE, LANGUAGES, pathForLanguage} from './site-data';

// scripts/prerender.js har bir til sahifasini shu funksiya orqali statik HTML'ga aylantiradi.
export function render(data) {
    return ReactDOMServer.renderToString(
        <LanguageContext.Provider value={{lang: data.lang, setLang: () => {}}}>
            <SiteDataContext.Provider value={data}>
                <div className="home-page">
                    <BodyOverlay/>
                    <PageLoader ready={false}/>
                    <SiteContent/>
                </div>
            </SiteDataContext.Provider>
        </LanguageContext.Provider>
    );
}
