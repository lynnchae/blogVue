const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",

        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  }
}
