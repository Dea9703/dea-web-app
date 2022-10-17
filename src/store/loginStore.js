// login module
const { makeAutoObservable } = require("mobx")
const { request } = require('@/utils')

class LoginStore {
  token = ''

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
  }

}

export default LoginStore