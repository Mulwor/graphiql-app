import { auth } from '@root/src/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components'
import { GraphiPage, HomePage, NotFound, SignInPage, SignUp } from '@/pages'

const privatRouter = createBrowserRouter([
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

const publicRouter = createBrowserRouter([
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
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => {
  const [user] = useAuthState(auth)

  return <RouterProvider router={user ? privatRouter : publicRouter} />
}
