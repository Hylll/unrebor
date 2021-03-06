module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
  devServer: {
    compress: true,
    public: 'www.unrebor.local',
    disableHostCheck: true,
  }
};
