import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      shared: "/src/shared",
      pages: "/src/pages",
      assets: "/src/assets",
      types: "/src/types",
      services: "/src/services",
    },
  },
});
