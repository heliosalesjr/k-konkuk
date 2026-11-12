import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        basics: resolve(import.meta.dirname, 'basics.html'),
        materials: resolve(import.meta.dirname, 'materials.html'),
        exercises: resolve(import.meta.dirname, 'exercises.html'),
        verbs: resolve(import.meta.dirname, 'verbs.html'),
        honorifics: resolve(import.meta.dirname, 'honorifics.html'),
        counters: resolve(import.meta.dirname, 'counters.html'),
        irregulars: resolve(import.meta.dirname, 'irregulars.html'),
        grammar: resolve(import.meta.dirname, 'grammar.html'),
      },
    },
  },
})
