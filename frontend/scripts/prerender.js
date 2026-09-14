// `vite build` va SSR build'dan keyin ishlaydi. Har bir til uchun kontent va SEO teglari bilan statik HTML
// (/, /uz/, /ru/), hamda sitemap.xml va robots.txt yaratadi. Ma'lumot backend'dan (/data/?lang=...) olinadi.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {loadEnv} from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const env = loadEnv('production', root, 'VITE_');
const API_URL = (env.VITE_API_URL || 'https://api.moorfo.uz').replace(/\/$/, '');
const LOCALES = {en: 'en_US', uz: 'uz_UZ', ru: 'ru_RU'};
const SEO_BLOCK = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
const ROOT_DIV = '<div id="root"></div>';

const {render, LANGUAGES, DEFAULT_LANGUAGE, pathForLanguage} = await import(
    pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// <script> ichiga xavfsiz joylash uchun ("</script>" matni tegni yopib qo'ymasin).
const jsonForScript = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

async function fetchData(lang) {
    const url = `${API_URL}/data/?lang=${lang}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url} -> HTTP ${response.status}`);
    const data = await response.json();
    if (!data.seo) throw new Error(`${url} javobida "seo" yo'q: backend yangi versiyada ekaniga ishonch hosil qiling`);
    return data;
}

function personSchema(data, url, image) {
    const {profile, seo} = data;
    const present = data.ui.dates.present;
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.full_name,
        alternateName: seo.alternate_names,
        url,
        image,
        jobTitle: profile.title,
        description: seo.description,
        email: `mailto:${profile.email}`,
        telephone: profile.phone_link,
        homeLocation: {'@type': 'Place', name: profile.location},
        worksFor: data.experience
            .filter((item) => item.date.endsWith(present))
            .map((item) => ({'@type': 'Organization', name: item.place})),
        knowsAbout: data.skills.map((skill) => skill.name),
        knowsLanguage: profile.languages.map((language) => language.name),
        sameAs: data.socials.map((social) => social.url),
    };
}

function headTags(data, site) {
    const {profile, seo} = data;
    const url = (lang) => site + pathForLanguage(lang);
    const image = `${site}/me.jpg`;
    return [
        `<title>${escapeHtml(seo.title)}</title>`,
        `<meta name="description" content="${escapeHtml(seo.description)}"/>`,
        `<meta name="keywords" content="${escapeHtml(seo.keywords)}"/>`,
        `<link rel="canonical" href="${url(data.lang)}"/>`,
        ...LANGUAGES.map((lang) => `<link rel="alternate" hreflang="${lang}" href="${url(lang)}"/>`),
        `<link rel="alternate" hreflang="x-default" href="${url(DEFAULT_LANGUAGE)}"/>`,
        `<meta property="og:type" content="profile"/>`,
        `<meta property="og:site_name" content="${escapeHtml(profile.full_name)}"/>`,
        `<meta property="og:title" content="${escapeHtml(seo.title)}"/>`,
        `<meta property="og:description" content="${escapeHtml(seo.description)}"/>`,
        `<meta property="og:url" content="${url(data.lang)}"/>`,
        `<meta property="og:image" content="${image}"/>`,
        `<meta property="og:locale" content="${LOCALES[data.lang]}"/>`,
        ...LANGUAGES.filter((lang) => lang !== data.lang)
            .map((lang) => `<meta property="og:locale:alternate" content="${LOCALES[lang]}"/>`),
        `<meta property="profile:first_name" content="${escapeHtml(profile.first_name)}"/>`,
        `<meta property="profile:last_name" content="${escapeHtml(profile.last_name)}"/>`,
        `<meta name="twitter:card" content="summary"/>`,
        `<script type="application/ld+json">${jsonForScript(personSchema(data, url(data.lang), image))}</script>`,
    ].join('\n    ');
}

function sitemap(site) {
    const today = new Date().toISOString().slice(0, 10);
    const alternates = [
        ...LANGUAGES.map((lang) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${site}${pathForLanguage(lang)}"/>`),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${site}${pathForLanguage(DEFAULT_LANGUAGE)}"/>`,
    ].map((line) => `    ${line}`).join('\n');
    const urls = LANGUAGES.map((lang) => [
        '  <url>',
        `    <loc>${site}${pathForLanguage(lang)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        alternates,
        '  </url>',
    ].join('\n'));
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...urls,
        '</urlset>',
        '',
    ].join('\n');
}

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf-8');
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
    throw new Error('dist/index.html kutilgan ko\'rinishda emas: "seo:start/seo:end" belgilari yoki #root topilmadi');
}

console.log(`prerender: ma'lumot ${API_URL} dan olinmoqda`);
const pages = await Promise.all(LANGUAGES.map(fetchData));
const site = pages[0].profile.website.replace(/\/$/, '');

for (const data of pages) {
    // Almashtirishlar funksiya orqali: matndagi "$" belgilari (masalan, "$10") maxsus ma'no olmasin.
    const html = template
        .replace(/<html lang="[^"]*">/, () => `<html lang="${data.lang}">`)
        .replace(SEO_BLOCK, () => headTags(data, site))
        .replace(ROOT_DIV, () => `<div id="root">${render(data)}</div>\n<script>window.__SITE_DATA__ = ${jsonForScript(data)};</script>`);

    const dir = path.join(dist, pathForLanguage(data.lang));
    await fs.mkdir(dir, {recursive: true});
    await fs.writeFile(path.join(dir, 'index.html'), html);
    console.log(`prerender: ${pathForLanguage(data.lang)} (${data.lang})`);
}

await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap(site));
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log('prerender: sitemap.xml, robots.txt');
