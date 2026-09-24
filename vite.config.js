import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        repairs: resolve(root, "phone-repairs.html"),
        accessories: resolve(root, "accessories.html"),
        printing: resolve(root, "printing.html"),
        watches: resolve(root, "watches-jewellery.html"),
        contact: resolve(root, "contact.html"),
        warranty: resolve(root, "warranty.html"),
        review: resolve(root, "review.html"),
        privacy: resolve(root, "privacy.html"),
        notFound: resolve(root, "404.html")
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    allowedHosts: ["terminal.local"]
  }
});
