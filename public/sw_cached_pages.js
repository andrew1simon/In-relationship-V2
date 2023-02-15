const cacheName = 'v5';

const cacheAssets = [
  '/manifest.webmanifest' ,
  '/sw_cached_pages.js' , 
  '/sw_cached_site.js' ,
  '/styles.css',
  '/js/main.js' , 
  '/icon/fox-icon.png' , 
  '/new-index.html' ,
  '/new-index/' ,
  '/_astro/hoisted.3021529e.js',
  '/img/ahabk.png',
  '/img/ayha-al-f5ary.png', 
  '/img/kol-youm.png',
  '/img/ma-ahla.png' ,
  '/img/ma-ly-soak.png' ,
  '/img/azay-y3ny.png',
  '/img/home.jpg',
  '/img/marad-alsabt.png',
  '/img/mard-elangel-2.png',
  '/img/day-1.png',
  '/img/day-2.png',
  '/img/el43ar.jpg',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap' ,
  'https://unpkg.com/onsenui/css/onsenui.css' ,
  'https://unpkg.com/onsenui/css/onsen-css-components.min.css' ,
  'https://unpkg.com/onsenui/js/onsenui.min.js' ,
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' ,
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' ,
  '/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts',

  'img/icon.jpeg'

];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))// caches.match(e.request)));
});
