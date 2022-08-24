const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  // vue自己的配置
  transpileDependencies: true,
  configureWebpack: {
    // webpack一样的配置
    devServer: {
      open: true,
      port: 8888,
      host: "localhost",
    },
  },
});
