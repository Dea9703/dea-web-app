import { useRoutes } from 'react-router-dom'

import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Layout from '@/pages/Layout'

const routesList = [
  {
    path: '/login',
    element: <Login />,
    index: true
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/',
    element: <Layout />
  }
]

const WrapperRoutes = () => {
  return useRoutes(routesList)
}

export default WrapperRoutes