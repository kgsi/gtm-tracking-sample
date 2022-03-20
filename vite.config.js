const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "detail/index.html"),
      },
    },
  },
});