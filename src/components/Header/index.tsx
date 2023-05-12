import { auth, logout } from '@root/src/firebase.config'
import { changeLanguage } from '@root/src/i18n'
import { settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate } from 'react-router-dom'

import { Lang, Nav, Toggle } from '@/components'

import { Burger } from '../Burger'

export const Header = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { isDark, isRu } = useAppSelector((state) => state.setting)
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
    if (isRu) {
      actions.setIsRu({ isRu: false })
      void changeLanguage('en')
    } else {
      actions.setIsRu({ isRu: true })
      void changeLanguage('ru')
    }
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

      {/* <button onClick={() => void changeLanguage('en')}>EN</button> */}
      {/* <button onClick={() => void changeLanguage('ru')}>RU</button> */}

      <div className='hidden gap-7 md:flex'>
        {user ? (
          <div className='dashboard'>
            <div className='flex'>
              <NavLink
                to={'/'}
                className='login-button button-hover mr-5 bg-seagreen text-center text-white dark:bg-lightblue dark:text-prussianblue'
              >
                <div>{t('header.fivethLink')}</div>
              </NavLink>
              <div>{user.email}</div>
              <button
                className='login-button button-hover ml-5 bg-seagreen text-center text-white dark:bg-lightblue dark:text-prussianblue'
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
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-seagreen text-white dark:bg-lightblue dark:text-prussianblue'
                  : 'login-button button-hover'
              }
            >
              <div>{t('header.thirdLink')}</div>
            </NavLink>
            <NavLink
              to={'/signup'}
              className={({ isActive }) =>
                isActive
                  ? 'login-button button-hover bg-seagreen text-white dark:bg-lightblue dark:text-prussianblue'
                  : 'login-button button-hover'
              }
            >
              <div>{t('header.fourthLink')}</div>
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}
