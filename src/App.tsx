import { NotFound } from '@root/src/pages/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthPage } from '@/pages/authpage/AuthPage'
import { GraphiPage } from '@/pages/graphipage/GraphiPage'
import { HomePage } from '@/pages/homepage/HomePage'

import { Layout } from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/graphi',
        element: <GraphiPage />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
