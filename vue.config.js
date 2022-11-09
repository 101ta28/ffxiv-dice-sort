const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "docs",
  assetsDir: "./",
  publicPath: "./",
  pages: {
    index: {
      entry: "src/main.js",
      title: "FF14ダイスソーター",
    },
  },
  transpileDependencies: ["vuetify"],
});
