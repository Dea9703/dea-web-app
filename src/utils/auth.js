// 封装工具函数
// token持久化：能够统一处理 token 的持久化相关操作

// 实现步骤：
// 1. 创建 utils/auth.js 文件
// 2. 分别提供 getToken/setToken/removeToken 三个工具函数并导出
// 3. 创建 utils/index.js 文件，统一导出 token.js 中的所有内容，来简化工具函数的导入
// 4. 将登录操作中用到 token 的地方，替换为该工具函数

// Token 在用户登录成功之后返回给客户端，客户端组要有三种存储方式：
// 储存在 localStorage 中，每次调用接口时放在http请求头里面，长期有效
// 储存在 sessionStorage 中，每次调用接口时把它当为一个字段传给后台，浏览器关闭自动清除
// 储存在 cookie 中，每次调用接口会自动发送，不过缺点是不能跨域

import Cookies from "js-cookie"
const TOKEN_KEY = 'dea-key'

const getToken = () => Cookies.get(TOKEN_KEY)
const setToken = (token) => Cookies.set(TOKEN_KEY, token)
const removeToken = () => Cookies.remove(TOKEN_KEY)

export {
  getToken,
  setToken,
  removeToken
}
