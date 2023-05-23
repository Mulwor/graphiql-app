import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorBoundary, Layout, ProtectedRoutes } from '@/components'
import { GraphiPage, HomePage, NotFound, SignInPage, SignUpPage } from '@/pages'

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
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'editor',
        element: (
          <ProtectedRoutes>
            <GraphiPage />
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
