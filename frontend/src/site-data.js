import {createContext, useContext} from 'react';

export const LANGUAGES = ['uz', 'ru', 'en'];
export const DEFAULT_LANGUAGE = 'en';

export const SiteDataContext = createContext(null);
export const LanguageContext = createContext(null);

export const useSiteData = () => useContext(SiteDataContext);
export const useLanguage = () => useContext(LanguageContext);

// Har bir til o'z manzilida (/, /uz/, /ru/), shunda qidiruv tizimlari ularni alohida indekslaydi.
export const pathForLanguage = (lang) => (lang === DEFAULT_LANGUAGE ? '/' : `/${lang}/`);

export function languageFromPath(pathname) {
    const segment = pathname.split('/')[1];
    return LANGUAGES.includes(segment) ? segment : DEFAULT_LANGUAGE;
}

// Avval saqlangan tanlov, bo'lmasa brauzer tili.
export function preferredLanguage() {
    try {
        const saved = localStorage.getItem('lang');
        if (LANGUAGES.includes(saved)) return saved;
    } catch {
        // localStorage bloklangan bo'lishi mumkin
    }
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return LANGUAGES.includes(browser) ? browser : null;
}

export function saveLanguage(lang) {
    try {
        localStorage.setItem('lang', lang);
    } catch {
        // localStorage bloklangan bo'lishi mumkin
    }
}
