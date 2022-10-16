import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import WrapperRoutes from './routes'
import { Button } from 'antd'


function App () {
  return (
    <div className="App">
      <Button type='primary'>登录</Button>
      <Button type='primary'>退出</Button>
      <BrowserRouter>
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
