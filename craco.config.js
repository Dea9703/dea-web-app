// 1. 安装修改 CRA 配置的包：yarn add -D @craco/craco
// 2. 在项目根目录中创建 craco 的配置文件：craco.config.js，并在配置文件中配置路径别名
// 3. 修改 package.json 中的脚本命令
// 4. 在代码中，就可以通过 @ 来表示 src 目录的绝对路径
// 5. 将package.json中 start/build/test 三个命令修改为 craco 方式
// 6. 重启项目，让配置生效

const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}

  // @别名路径提示
  // 让vscode识别@路径并给出路径提示
  // 实现步骤
  // 1. 在项目根目录创建 jsconfig.json 配置文件
  // 2. 在配置文件中添加以下配置