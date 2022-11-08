const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  outputDir: "./public/ff14-dice-sort",
  transpileDependencies: ["vuetify"],
});
