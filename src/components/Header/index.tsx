import { auth, logout } from '@root/src/firebase.config'
import { settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'

import { Lang, Nav, Toggle } from '@/components'

import { Burger } from '../Burger'

export const Header = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const isDark = useAppSelector((state) => state.setting.isDark)
  const isRu = useAppSelector((state) => state.setting.isRu)
  const actions = useActionCreators(settingActions)

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

  const handlerLang = () => {
    actions.setIsRu({ isRu: !isRu })
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
  }, [user, loading, navigate])

  return (
    <header className='mx-auto mb-5 flex w-full items-baseline justify-between'>
      <Burger />
      <Nav />

      <div className='hidden md:flex'>
        <Toggle onClick={handlerDark} />
        <Lang onClick={handlerLang} />
      </div>

      <div className='hidden gap-7 md:flex'>
        {user ? (
          <div className='dashboard'>
            <div className='flex'>
              <NavLink
                to={'/'}
                className='login-button button-hover mr-5 bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
              >
                Main page
              </NavLink>
              <div>{user.email}</div>
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
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-mainblue text-white dark:bg-lightblue dark:text-darkblue'
                  : 'login-button button-hover'
              }
            >
              Sign in
            </NavLink>
            <NavLink
              to={'/signup'}
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-mainblue text-white dark:bg-lightblue dark:text-darkblue'
                  : 'login-button button-hover'
              }
            >
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}
