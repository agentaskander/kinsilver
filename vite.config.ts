import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5193,
    strictPort: true
  },
  preview: {
    host: "127.0.0.1",
    port: 5194,
    strictPort: true
  },
  build: {
    sourcemap: false
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts"
  }
});
