import { auth, logout } from '@root/src/firebase.config'
import { changeLanguage } from '@root/src/i18n'
import { themeActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate } from 'react-router-dom'

import { Nav, Toggle } from '@/components'

export const Header = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

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

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
  }, [user, loading, navigate])

  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-xl justify-between'>
      <Nav />

      <div className='settings'>
        <Toggle onClick={handlerDark} />
      </div>

      <button onClick={() => void i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => void i18n.changeLanguage('ru')}>RU</button>

      <div className='flex gap-7'>
        {user ? (
          <div className='dashboard'>
            <div className='flex'>
              <NavLink
                to={'/'}
                className='login-button button-hover mr-5 bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
              >
                <div>{t('header.fivethLink')}</div>
              </NavLink>
              <div>{user.email}</div>
              <button
                className='login-button button-hover ml-5 bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
                onClick={logout}
              >
                <div>{t('header.sixLink')}</div>
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to={'/signin'}
              className='login-button button-hover bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
            >
              <div>{t('header.thirdLink')}</div>
            </NavLink>
            <NavLink
              to={'/signup'}
              className='login-button button-hover text-center'
            >
              <div>{t('header.fourthLink')}</div>
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}
