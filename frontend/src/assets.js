const assets = import.meta.glob('./assets/**/*.{png,jpg,jpeg,svg,gif,webp}', {eager: true, import: 'default'});

// Backend JSON rasmlarni "python.png" yoki "portfolio/3.jpg" ko'rinishida beradi, to'liq URL bo'lsa o'zi qaytadi.
export function assetUrl(path) {
    if (!path || /^(https?:)?\/\//.test(path)) return path;
    return assets[`./assets/${path}`] || path;
}
