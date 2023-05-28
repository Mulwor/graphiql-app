import { useLayoutEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { Preloader } from '@/components'
import { auth } from '@/firebase.config'

export const ProtectedRoutes = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate()

  const [user, isLoading] = useAuthState(auth)

  useLayoutEffect(() => {
    if (isLoading) return

    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, isLoading])

  return isLoading ? <Preloader /> : children
}
