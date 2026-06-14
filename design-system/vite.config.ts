import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8099,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 8100,
    strictPort: true,
    host: true,
  },
});
