const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/ff14-dice-sort/" : "/",
  transpileDependencies: ["vuetify"],
});
