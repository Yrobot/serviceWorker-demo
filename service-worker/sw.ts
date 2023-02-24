const worker: ServiceWorkerGlobalScope = self as any;

const mark = Math.floor(Date.now() / 1000) % 1000;

console.log(`[service-worker:${mark}] running`);

worker.addEventListener("install", (event) => {
  console.log(`[service-worker:${mark}] installed`);
  worker.skipWaiting();
});

worker.addEventListener("activate", (event) => {
  console.log(`[service-worker:${mark}] activated`);
});

worker.addEventListener("fetch", (event) => {
  const { url, method } = event.request;
  const { origin, port, pathname } = new URL(url);

  if (origin === self.origin && method === "GET" && pathname === "/hi") {
    console.log(`[service-worker:${mark}] fetch '${pathname}'`);
    // GET http://localhost:3000/hi => "Hello World!"
    event.respondWith(new Response(`Hello World! ${mark}`));
  }
});
