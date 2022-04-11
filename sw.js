const staticCahcheName = "s-app-v4";
const dynamicCahcheName = "d-app-v4";
const assetUrls = [
  "./index.html",
  "../src/components/Block.tsx",
  "../src/App.tsx",
  "../src/App.css",
  "../src/index.css",
  "../src/index.tsx",
  "../offline.html",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(staticCahcheName);
  await cache.addAll(assetUrls);
});

self.addEventListener("activate", async () => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCahcheName)
      .filter((name) => name !== dynamicCahcheName)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(request));
  } else {
    e.respondWith(networkFirst(request));
  }
  console.log("fetch ", e.request.url);
});

async function cacheFirst(req) {
  const cached = await caches.match(req);
  return cached ?? (await fetch(req));
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCahcheName);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached; //?? caches.match("./offline.html")
  }
}
