import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(async () => ({
  publicDir: "./public",
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },

  plugins: [vue()],

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
    @import "./src/css/include.sass"
`
      }
    }
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
