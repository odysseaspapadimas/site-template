import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Use a relative base path. This ensures that all asset links in the built
  // HTML are relative to the index.html file, which is required for deployments
  // to a subdirectory (like on S3).
  base: './',
  build: {
    // Output directory for the built files
    outDir: 'dist',
  },
}) 