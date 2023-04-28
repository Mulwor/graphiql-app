import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@root': resolve(__dirname),
    },
  },
})
