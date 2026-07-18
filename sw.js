// =========================================================
// 🛰️ RIKDATASTREAM OFFLINE-FIRST LOCAL CACHE PROXY WORKER
// =========================================================
const CACHE_NAME = "datastream-vault-v1";
const STATIC_ASSETS = [
    "/RikDataStream-Pro/index.html",
    "/RikDataStream-Pro/style.css",
    "/RikDataStream-Pro/app.js",
    "/RikDataStream-Pro/manifest.json",
    "/RikDataStream-Pro/teacher.png",
    "/RikDataStream-Pro/data/mock.xml"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("💾 Bundling resource layers into device disk storage...");
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
