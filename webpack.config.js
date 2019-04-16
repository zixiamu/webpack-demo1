// 自带的库
const path = require('path')
module.exports = {
    mode:'development',
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      module: {
        rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
              loader: "css-loader"
              , options: { importLoaders: 1 } // 将 CSS 转化成 CommonJS 模块
          },{
              loader: 'postcss-loader'
          },{
              loader: "sass-loader" // 将 Sass 编译成 CSS
          }]
        }]
      }
  }