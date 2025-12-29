self.addEventListener("install", () => {
  // Activate new SW immediately
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Take control of all tabs instantly
  self.clients.claim();
});
