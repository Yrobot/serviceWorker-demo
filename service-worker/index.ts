declare const self: ServiceWorkerGlobalScope;
export type {};

console.log("[service-worker] running");

self.addEventListener("install", () => {
  console.log("[service-worker] installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("[service-worker] activated");
  return self.clients.claim();
});
