const withCSS = require('@zeit/next-css');
const withStylus = require('@zeit/next-stylus');
module.exports = withCSS(withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
}));
