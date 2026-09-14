import {createContext, useContext} from 'react';

export const LANGUAGES = ['uz', 'ru', 'en'];

export const SiteDataContext = createContext(null);
export const LanguageContext = createContext(null);

export const useSiteData = () => useContext(SiteDataContext);
export const useLanguage = () => useContext(LanguageContext);

// Avval saqlangan tanlov, keyin brauzer tili, bo'lmasa ingliz tili.
export function detectLanguage() {
    try {
        const saved = localStorage.getItem('lang');
        if (LANGUAGES.includes(saved)) return saved;
    } catch {
        // localStorage bloklangan bo'lishi mumkin
    }
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return LANGUAGES.includes(browser) ? browser : 'en';
}
