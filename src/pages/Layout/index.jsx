
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { removeToken } from '@/utils'
import { Layout, Popconfirm, message } from 'antd'
import {
  LogoutOutlined
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout

function DeaLayout () {
  const navigate = useNavigate()

  const confirmQuit = (e) => {
    console.log(e)
    message.success('Click on Yes')
    removeToken()
    navigate('/login', { replace: true })
  }

  const cancelQuit = (e) => {
    console.log(e)
    message.success('Click on No')
  }

  return (
    <Layout>
      <Sider style={{ background: '#fff' }}>Sider</Sider>
      <Layout>
        <Header style={{
          background: '#c0c0c0', display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <span className='user-name'>userName</span>
          <span className='user-logout'>
            <Popconfirm
              title="是否确认退出?"
              okText="是"
              cancelText="否"
              onConfirm={confirmQuit}
              onCancel={cancelQuit}
            >
              <span>退出</span><LogoutOutlined />
            </Popconfirm>
          </span>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DeaLayout