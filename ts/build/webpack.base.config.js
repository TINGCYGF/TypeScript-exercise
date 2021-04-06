const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts', //入口文件
  output: {
    filename: 'app.js' //输出文件名
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module:{
    rules: [
      [
        {
          test: /.\tsx?$/i, //配置编译正则
          use: [{
            loader: 'ts-loader'
          }],
          exclude: /node_modules/, //排除编译文件
        }
      ]
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html' //输出文件嵌入
    })
  ]
}