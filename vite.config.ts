import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MySampleLibrary',
      fileName: 'index',
      formats: ['es', 'umd'], // es module and umd
    },
  },
  plugins: [react(), dts()],
})
