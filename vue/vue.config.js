module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  devServer: {
    host: process.env.VUE_APP_HOSTNAME,
    port: process.env.VUE_APP_PORT,
    public: process.env.VUE_APP_PUBLIC,
    disableHostCheck: true,
  },
};
