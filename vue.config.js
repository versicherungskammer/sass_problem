const path = require("path");
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/globalVariables.scss";`,
                includePaths: [path.resolve(__dirname, "node_modules")],
                processCssUrls: false
            
            }
            }
        },

  chainWebpack: function(config) {
    enableShadowCss(config);
  }



};





function enableShadowCss(config) {
  const configs = [
    config.module.rule("vue").use("vue-loader"),
    config.module
      .rule("css")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("css")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("css")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("css")
      .oneOf("normal")
      .use("vue-style-loader"),
    config.module
      .rule("postcss")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("postcss")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("postcss")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("postcss")
      .oneOf("normal")
      .use("vue-style-loader"),
    config.module
      .rule("scss")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("scss")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("scss")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("scss")
      .oneOf("normal")
      .use("vue-style-loader"),
    config.module
      .rule("sass")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("sass")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("sass")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("sass")
      .oneOf("normal")
      .use("vue-style-loader"),
    config.module
      .rule("less")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("less")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("less")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("less")
      .oneOf("normal")
      .use("vue-style-loader"),
    config.module
      .rule("stylus")
      .oneOf("vue-modules")
      .use("vue-style-loader"),
    config.module
      .rule("stylus")
      .oneOf("vue")
      .use("vue-style-loader"),
    config.module
      .rule("stylus")
      .oneOf("normal-modules")
      .use("vue-style-loader"),
    config.module
      .rule("stylus")
      .oneOf("normal")
      .use("vue-style-loader")
  ];
  configs.forEach(function(c) {
    c.tap(function(options) {
      options.shadowMode = true;
      return options;
    });
  });
}
