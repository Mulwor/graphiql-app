import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components'
import { GraphiPage, HomePage, NotFound, SignInPage, SignUp } from '@/pages'

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
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUp />,
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
