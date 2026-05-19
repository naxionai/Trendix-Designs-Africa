import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to your repo name
// e.g. if your repo is github.com/nature-/trendix-website → base: '/trendix-website/'
export default defineConfig({
  plugins: [react()],
  base: '/Trendix-Designs-Africa/',  // ← change this to match your GitHub repo name
})
