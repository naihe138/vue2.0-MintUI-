var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    demo: './src/demo/index.js',
    demo2: './src/demo2/index.js',
    demo3: './src/demo3/index.js',
    mixin: './src/mixin/index.js',
    vuex: './src/vuex/index.js',
    zoomImage: './src/zoomImage/index.js',
    scroll: './src/vue-scroll/index.js',
    arearSelect: './src/LAear/index.js',
    vueTable: './src/vue-table/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name]/[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue',
      '@': resolve('src'),
      'serverConfig': resolve('src/public/js/serverConfig.js'),
      'nativeApi': resolve('src/public/js/nativeApi.js'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   },
      //   exclude: [/node_modules/, /public/]
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      serverConfig: 'serverConfig',
      nativeApi: 'nativeApi',
      Vue: 'vue$'
    }),
    new CopyWebpackPlugin([{
      from: 'src/index.html'
    }])
  ]
}
