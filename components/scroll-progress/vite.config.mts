import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "StimulusScrollProgress",
      fileName: "stimulus-scroll-progress",
    },
    rollupOptions: {
      external: ["@hotwired/stimulus"],
      output: {
        globals: {
          "@hotwired/stimulus": "Stimulus",
        },
      },
    },
  },
})
