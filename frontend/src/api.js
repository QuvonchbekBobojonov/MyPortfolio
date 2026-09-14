export const API_URL = (import.meta.env.VITE_API_URL || 'https://api.moorfo.uz').replace(/\/$/, '');

// Saytning o'z domenidagi manzil (moorfo.uz/cv/?lang=uz): Vercel'da vercel.json, lokalda vite proxy
// uni backend'ga yo'naltiradi. Shu havola ulashilganda Telegram uni PDF fayl sifatida ko'rsatadi.
export const cvUrl = (lang) => `/cv/?lang=${lang}`;
