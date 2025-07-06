import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // The base path for all assets, needed for subdirectory deployment on S3
  base: process.env.VITE_BASE_URL || '/',
  build: {
    // Output directory for the built files
    outDir: 'dist',
  },
}) 