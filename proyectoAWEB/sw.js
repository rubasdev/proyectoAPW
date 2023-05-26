self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-app-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/function.js',
          '/img/icon-192x192.png',
          '/img/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  