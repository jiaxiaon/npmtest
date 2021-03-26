const path = require('path') // 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: './',
  // 1.更改入口和出口文件名
  pages: {
    index: {
      entry: 'examples/main.js',//修改入口
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 2.扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('./examples')) //3.修改快捷路径
  //     .set('components', resolve('./examples/components'))
  //     .set('views', resolve('./examples/views'))
  //     .set('assets', resolve('./examples/assets'))
  //   config.module
  //     .rule('js')
  //     .include
  //     .add('/packages/')
  //     .end()
  //     .use('babel')
  //     .loader('babel - loader')
  //     .tap(options => {
  //       // 修改它的选项...

  //       return options
  //     })
  // },
}