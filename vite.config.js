import { defineConfig } from 'vite'
import path from 'node:path'
import fs from 'node:fs/promises'
import { bundle } from 'lightningcss'

function tokyBuildPlugin() {
  return {
    name: 'toky-build',
    // We use the very last hook available to ensure Vite is done
    async closeBundle() {
      const root = process.cwd()
      const outDir = path.resolve(root, 'dist')
      const entryFile = path.resolve(root, 'src/toky.css')

      console.log('\n--- Toky Build Starting ---')

      try {
        // 1. Bundle via LightningCSS (reads entry + resolves @imports from disk)
        const unmin = bundle({
          filename: entryFile,
          minify: false,
          sourceMap: false,
        });

        const min = bundle({
          filename: entryFile,
          minify: true,
          sourceMap: false,
        });

        // 2. Perform a hard cleanup of the dist folder
        const files = await fs.readdir(outDir);
        for (const file of files) {
          await fs.rm(path.join(outDir, file), { recursive: true, force: true });
        }

        // 3. Final Write
        await fs.writeFile(path.join(outDir, 'toky.css'), unmin.code);
        await fs.writeFile(path.join(outDir, 'toky.min.css'), min.code);

        console.log('✅ SUCCESS: toky.css and toky.min.css are up to date.');
      } catch (err) {
        console.error('❌ Toky Build Error:', err);
      }
    },
  }
}

export default defineConfig({
  plugins: [tokyBuildPlugin()],
  build: {
    // Minimize Vite's footprint so it doesn't lock the directory
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'TokyCSS',
      fileName: 'cleanup',
      formats: ['es'],
    },
    emptyOutDir: true,
    // Disable CSS code splitting to stop Vite from generating its own CSS files
    cssCodeSplit: false,
  },
  // Ensure the server watches your CSS for changes
  server: {
    open: 'docs/styleguide.html',
    watch: {
      usePolling: true
    }
  }
})
