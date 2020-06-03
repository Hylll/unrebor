module.exports = {
  runtimeCompiler: true,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/style.scss";
        `
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    compress: true,
    public: 'www.unrebor.local',
    disableHostCheck: true,
  }
};
