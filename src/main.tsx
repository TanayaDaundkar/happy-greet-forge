import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// Register the Service Worker (handles install + updates + offline)
const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: prompt user to refresh when a new version is available
    if (confirm("A new version is available. Reload now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("Gurukul Code is ready to work offline 🎉");
  },
});

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
