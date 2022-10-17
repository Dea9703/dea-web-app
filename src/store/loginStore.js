// login module
const { makeAutoObservable } = require("mobx")
const { request, getToken, setToken } = require('@/utils')

class LoginStore {
  token = getToken() || ''

  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  getToken = async ({ mobile, code }) => {
    const res = await request.post('authorizations', {
      mobile, code
    })
    // 存入token
    this.token = res.data.token
    // 存入localStorage
    setToken(this.token)
  }

}

export default LoginStore