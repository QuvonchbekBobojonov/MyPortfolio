export const API_URL = (import.meta.env.VITE_API_URL || 'https://api.moorfo.uz').replace(/\/$/, '');

export const cvUrl = (lang) => `${API_URL}/cv/?lang=${lang}`;
