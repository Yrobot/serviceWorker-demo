/// <reference no-default-lib="true"/>
/// <reference lib="ES6" />
/// <reference lib="WebWorker" />

declare var self: ServiceWorkerGlobalScope;
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
