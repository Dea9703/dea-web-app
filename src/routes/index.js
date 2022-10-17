import { useRoutes } from 'react-router-dom'

import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Layout from '@/pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'

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
    element: <AuthRoute><Layout /></AuthRoute>
  }
]

const WrapperRoutes = () => {
  return useRoutes(routesList)
}

export default WrapperRoutes