import {createContext, useContext} from 'react';

export const SiteDataContext = createContext(null);

export const useSiteData = () => useContext(SiteDataContext);
