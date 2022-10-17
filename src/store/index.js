// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
import React from 'react'
import LoginStore from './loginStore'
class RootStore {
  constructor() {
    // 实例化子模块
    this.loginStore = new LoginStore()
  }
}

// 实例化RootStore注入context
const StoresContext = React.createContext(new RootStore())

// 导出方法 供组件调用方法使用store根实例
const useStore = () => React.useContext(StoresContext)
export { useStore }