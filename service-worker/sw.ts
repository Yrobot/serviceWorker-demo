const worker: ServiceWorkerGlobalScope = self as any;

console.log("[service-worker] running");

worker.addEventListener("install", () => {
  console.log("[service-worker] installed");
  worker.skipWaiting();
});

worker.addEventListener("activate", () => {
  console.log("[service-worker] activated");
  return worker.clients.claim();
});
