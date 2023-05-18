import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components'
import { GraphiPage, HomePage, NotFound, SignInPage, SignUpPage } from '@/pages'

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
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'graphi',
        element: <GraphiPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '404',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
