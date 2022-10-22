// 先把所有工具函数导出的模块导入在这里，然后再统一导出
import { request } from './request'
import { getToken, setToken, removeToken } from './auth'
export {
  request,
  getToken,
  setToken,
  removeToken
}