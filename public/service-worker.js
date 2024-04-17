const CACHE_NAME = "v1";

self.addEventListener("install", () => {
  console.log("Service worker installed");
});

self.addEventListener("activate", () => {
  console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        const clone = response.clone();
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, clone);
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});