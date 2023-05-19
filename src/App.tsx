import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Layout, ProtectedRoutes } from '@/components'
import { GraphiPage, HomePage, NotFound, SignInPage, SignUpPage } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
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
        path: 'editer',
        element: (
          <ProtectedRoutes>
            <GraphiPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: '*',
        element: <Navigate to={'/404'} />,
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
