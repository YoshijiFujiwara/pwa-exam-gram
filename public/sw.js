
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
})

self.addEventListener('active', function() {
  console.log('[Service Worker] Installing Service Worker ...', event);
  return self.clients.claim();
})

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Fetching something ...', event);
  event.respondWith(fetch(event.request));
});
