import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      // 配置src目录
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    assetsDir: "zxmh5",
  },
});
