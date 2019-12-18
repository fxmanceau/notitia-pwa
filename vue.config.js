module.exports = {
  lintOnSave: false,
  pwa: {
    workboxOptions: {
      navigateFallback: "/index.html"
    }
  },
  devServer: {
    https: false
  }
};
