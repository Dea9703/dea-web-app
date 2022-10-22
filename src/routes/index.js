import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'

const DataOverview = lazy(() => import('@/pages/DataOverview'))
const ContentManagement = lazy(() => import('@/pages/ContentManagement'))
const PublishArticle = lazy(() => import('@/pages/PublishArticle'))
const NotFound = lazy(() => import('@/pages/NotFound'))


const routesList = [
  {
    path: '/login',
    element: <Login />,
    index: true
  },
  {
    path: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <DataOverview />
      },
      {
        path: 'content-management',
        element: <ContentManagement />
      },
      {
        path: 'publish-article',
        element: <PublishArticle />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

const WrapperRoutes = () => {
  return useRoutes(routesList)
}

export default WrapperRoutes