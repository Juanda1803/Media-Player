const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // get
  if (request.method !== "GET") {
    return;
  }

  // Search in chche
  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache());
});

const precache = async () => {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "/public",
    // "/public/index.html",
    // "/src/index.js",
    // "/src/MediaPlayer.js",
    // "/src/plugins/AutoPlay.js",
    // "/src/plugins/AutoPause.ts",
    // "/src/assets/styles/styles.css",
    // "/src/assets/static/BigBuckBunny.mp4",
    // "/src/assets/static/mute.png",
    // "/src/assets/static/unmute.png",
    // "/src/assets/static/play.png",
    // "/src/assets/static/pause.png",
  ]);
};

const cachedResponse = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
};

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
