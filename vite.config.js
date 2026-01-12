import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/", // For custom domain (rubayatabdullah.me)
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
