import { auth } from '@root/src/firebase.config'
import { useLayoutEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { Preloader } from '@/components'

export const ProtectedRoutes = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate()

  const [user, isLoading] = useAuthState(auth)

  useLayoutEffect(() => {
    if (isLoading) return

    if (!user) {
      navigate('/signin')
    }
  }, [user, navigate, isLoading])

  return isLoading ? <Preloader /> : children
}
