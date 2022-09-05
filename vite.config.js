import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "",
  build: {
    assetsDir: ".",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        painting: resolve(__dirname, 'painting/index.html'),
      },
    },
  },
})
