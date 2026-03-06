const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'app.js',  // Agrega tus archivos aquí
    'style.css'  // Si tienes CSS
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});