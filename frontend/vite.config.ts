import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@state': '/src/state',
      '@hooks': '/src/hooks',
      '@common': '../common',
      '@node_modules' : "../../node_modules"
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  }
})
