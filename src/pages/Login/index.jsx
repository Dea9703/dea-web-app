import { UserOutlined, LockOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Form, Input, Button, Row, Col, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { useStore } from '@/store'

const Login = () => {
  const navigate = useNavigate()
  const { loginStore } = useStore()

  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  // 固定验证码：246810
  const [captcha, setCaptcha] = useState('')
  const [captchaBtn, setCaptchaBtn] = useState('获取验证码')
  const [captchaBtnDisabled, setCaptchaBtnDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const [loginForm] = Form.useForm()

  // 获取验证码
  const getCaptcha = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (!account) {
        message.error('手机号不存在')
      } else {
        message.success('验证码发送成功')
        let timeInterval = 60
        setCaptchaBtnDisabled(true)
        let interval = setInterval(() => {
          setCaptchaBtn(`${--timeInterval}后重新获取`)
          if (timeInterval <= 0) {
            setCaptchaBtn('获取验证码')
            setCaptchaBtnDisabled(false)
            clearInterval(interval)
          }
        }, 1000)
      }
    }, 3000)
  }

  // 登录
  const login = async () => {
    try {
      const values = await loginForm.validateFields()
      // values 放置的是表单中用户输入的所有内容
      console.log('Success:', values)
      // todo: 登录
      await loginStore.getToken({
        mobile: values.account,
        code: values.captcha
      })
      message.success('登录成功')
      navigate('/', { replace: true })
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  // 手机号校验
  const phoneValidator = (_, value) => {
    const phoneRegex = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (!value) {
      return Promise.reject('请输入手机号')
    } else if (!phoneRegex.test(value)) {
      return Promise.reject('手机号格式错误')
    } else {
      return Promise.resolve()
    }
  }

  // 密码校验
  const pwdValidator = (_, value) => {
    const pwdRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
    if (!value || value.length < 8 || value.length > 16) {
      return Promise.reject('请输入8到16位密码')
    } else if (!pwdRegex.test(value)) {
      return Promise.reject('密码至少包含数字、大写字母、小写字母')
    } else {
      return Promise.resolve()
    }
  }

  // 验证码校验
  const captchaValidator = (_, value) => {
    const captchaRegex = /^[0-9]*$/
    if (!value) {
      return Promise.reject('请输入验证码')
    } else if (value.length !== 6) {
      return Promise.reject('请输入6位验证码')
    } else if (!captchaRegex.test(value)) {
      return Promise.reject('请输入数字验证码')
    } else {
      return Promise.resolve()
    }
  }

  return (
    <div className='login'>
      <Form form={loginForm} className='login-form'>
        <div className='title'>
          <img className='t-logo' src={require('@/assets/image/web.png')} alt="logo" />
          <span className='t-name'>Dea管理系统</span>
        </div>
        <Form.Item name="account" rules={[{ validator: phoneValidator }]}>
          <Input
            prefix={<UserOutlined />}
            value={account}
            allowClear
            placeholder='手机号'
            onChange={(e) => setAccount(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ validator: pwdValidator }]}>
          <Input.Password
            prefix={<LockOutlined />}
            value={pwd}
            allowClear
            placeholder='密码'
            onChange={(e) => setPwd(e.target.value)}
            autoComplete='off'
          />
        </Form.Item>
        <Form.Item>
          <Row className='captcha'>
            <Col>
              <Form.Item name="captcha" rules={[{ validator: captchaValidator }]}>
                <Input
                  prefix={<UnorderedListOutlined />}
                  value={captcha}
                  allowClear
                  placeholder='验证码'
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col>
              <Button loading={loading} disabled={captchaBtnDisabled} onClick={getCaptcha}>{captchaBtn}</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit' onClick={login}>登录</Button>
        </Form.Item>
        <div className='forget-password'><span onClick={() => console.log('忘记密码')}>忘记密码</span></div>
      </Form>
    </div>
  )
}

export default Login