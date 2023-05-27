import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorBoundary, Layout, ProtectedRoutes } from '@/components'
import { EditorPage, HomePage, LoginPage, NotFound, RegisterPage } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'editor',
        element: (
          <ProtectedRoutes>
            <EditorPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
