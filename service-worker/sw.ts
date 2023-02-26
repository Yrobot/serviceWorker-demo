import router, { Method } from "./router";

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
  const request = event.request;
  const url = new URL(request.url);
  const context = { request, url };

  console.log(`[service-worker:${mark}] fetch '${url.pathname}'`);

  const match = router.match(request.method as Method, url.pathname);
  if (match) {
    event.respondWith(match.handler(match.params, context));
  }
});
