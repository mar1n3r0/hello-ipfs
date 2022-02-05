const cacheName = "app-" + "716d074d0645d063901420068c432d46ef9c9cc7";

self.addEventListener("install", event => {
  console.log("installing app worker 716d074d0645d063901420068c432d46ef9c9cc7");

  event.waitUntil(
    caches.open(cacheName).
      then(cache => {
        return cache.addAll([
          "index.html",
          "https://storage.googleapis.com/murlok-github/icon-192.png",
          "https://storage.googleapis.com/murlok-github/icon-512.png",
          
        ]);
      }).
      then(() => {
        self.skipWaiting();
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  console.log("app worker 716d074d0645d063901420068c432d46ef9c9cc7 is activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
