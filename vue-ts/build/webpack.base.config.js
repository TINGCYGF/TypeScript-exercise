const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: {
    'app': './src/index.ts'
  },
  output: {
    filename: '[name].[chunkhash:8].js' //输出文件名
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      vue: 'vue/dist/vue.esm.js' //w完整Vue
    }
  },
  module:{
    rules: [
      [
        {
          test: /.\tsx?$/i, //配置编译正则
          use: [{
            loader: 'ts-loader',
            option: {
              transpileOnly: false, //快速构建，缺点：没有类型检查
            }
          }],
          exclude: /node_modules/, //排除编译文件
        }
      ]
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html' //输出文件嵌入
    }),
    // new ForkTsCheckerWebpackPlugin()
    new CheckerPlugin()
  ]
}