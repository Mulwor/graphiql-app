import { auth, db, logout } from '@root/src/firebase.config'
import { themeActions, useActionCreators, useAppSelector } from '@root/src/store'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'

import { Nav, Toggle } from '@/components'

export const Header = () => {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const isDark = useAppSelector((state) => state.theme.isDark)
  const actions = useActionCreators(themeActions)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handlerDark = () => {
    actions.setIsDark({ isDark: !isDark })
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setName(data.name)
    } catch (error_) {
      console.error(error_)
      alert('An error occured while fetching user data')
    }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
  }, [user, loading])

  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-xl justify-between'>
      <Nav />

      <div className='settings'>
        <Toggle onClick={handlerDark} />
      </div>

      <div className='flex gap-7'>
        {user ? (
          <div className='dashboard'>
            <div className='flex'>
              <div>{name}</div>
              <div>{user?.email}</div>
              <button
                className='login-button button-hover ml-5 bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to={'/signin'}
              className='login-button button-hover bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
            >
              Sign in
            </NavLink>
            <NavLink
              to={'/signup'}
              className='login-button button-hover text-center'
            >
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}
