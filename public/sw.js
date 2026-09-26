// Service Worker for How-To.AI PWA
const CACHE_NAME = 'howto-ai-v2';
// Only real, build-stable paths. Note: Next.js bundles CSS to a hashed
// /_next/static/... path at build time, so there is NO stable '/app/globals.css'
// to precache. Attempting it made cache.addAll() reject atomically, which
// failed the whole install and silently disabled all offline caching.
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Add individually so a single unavailable asset cannot abort the
      // entire precache (and therefore the install).
      return Promise.all(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[sw] precache skipped:', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Stale-while-revalidate strategy for navigation and assets
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and request fails, return cached response
          return cachedResponse;
        });

      // Navigation requests must never reject offline, otherwise the browser
      // shows its own error page instead of the app shell.
      if (event.request.mode === 'navigate') {
        return fetchPromise.then((response) => {
          if (response && response.status === 200) return response;
          return cachedResponse || caches.match('/');
        });
      }

      return cachedResponse || fetchPromise;
    })
  );
});
