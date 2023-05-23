import { auth, logout } from '@root/src/firebase.config'
import { settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { Burger, Lang, Logo, Toggle } from '@/components'

export const Header = () => {
  const [user] = useAuthState(auth)

  const { t } = useTranslation()

  const [scroll, setScroll] = useState(0)

  const isDark = useAppSelector((state) => state.setting.isDark)
  const actions = useActionCreators(settingActions)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handlerDark = () => {
    actions.setIsDark({ isDark: !isDark })
  }

  return (
    <header
      className={
        scroll
          ? 'dark: sticky top-0 z-20 mx-auto mb-5 flex w-full items-baseline justify-between bg-white px-5 pb-2.5 dark:bg-darknavy'
          : 'sticky top-0 z-20 mx-auto mb-5 flex w-full items-center justify-between px-5'
      }
    >
      <Burger />
      <nav className='hidden md:flex'>
        <NavLink to='/'>
          <Logo />
        </NavLink>
      </nav>

      <div className='hidden md:flex'>
        <Toggle onClick={handlerDark} />
        <Lang />
      </div>

      <div className='hidden gap-7 md:flex'>
        {user ? (
          <div className='dashboard'>
            <div className='flex'>
              <div>{user.email}</div>
              <button
                className='login-button button-hover ml-5 bg-seagreen text-center text-white dark:bg-sky dark:text-prussianblue'
                onClick={logout}
              >
                <div>{t('logout')}</div>
              </button>
              <NavLink
                to={'/editor'}
                className='login-button button-hover ml-5 bg-seagreen text-center text-white dark:bg-sky dark:text-prussianblue'
              >
                <div>GraphiQL</div>
              </NavLink>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to={'/signin'}
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-seagreen text-white dark:bg-sky dark:text-prussianblue'
                  : 'login-button button-hover'
              }
            >
              <div>{t('signIn')}</div>
            </NavLink>
            <NavLink
              to={'/signup'}
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-seagreen text-white dark:bg-sky dark:text-prussianblue'
                  : 'login-button button-hover'
              }
            >
              <div>{t('signUp')}</div>
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}
