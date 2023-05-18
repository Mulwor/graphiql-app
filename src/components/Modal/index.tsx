import { auth, logout } from '@root/src/firebase.config'
import { changeLanguage } from '@root/src/i18n'
import { RootState, settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '@/assets/close.svg'
import { ReactComponent as GraphiIcon } from '@/assets/graphql.svg'
import { ReactComponent as HouseIcon } from '@/assets/house.svg'
import { ReactComponent as SignInIcon } from '@/assets/signin.svg'
import { ReactComponent as SignUpIcon } from '@/assets/signup.svg'
import { Lang, Toggle } from '@/components'

export type ModalType = {
  onClick: () => void
}

export const Modal = ({ onClick }: ModalType) => {
  const [user] = useAuthState(auth)
  const { isDark, isRu } = useAppSelector((state: RootState) => state.setting)
  const actions = useActionCreators(settingActions)
  const { t } = useTranslation()

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

  return (
    <>
      <div
        className='fixed left-0 top-0 z-40 h-screen w-screen bg-opacitycolor backdrop-blur'
        onClick={onClick}
      ></div>
      <div className='fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto bg-whitesmoke p-4 shadow-2xl transition-all dark:bg-darknavy dark:text-lightblue'>
        <h5 className='font-bold uppercase'>Menu</h5>
        <button
          type='button'
          onClick={onClick}
          className='absolute right-2.5 top-2.5 inline-flex items-center rounded-lg p-1.5'
        >
          <CloseIcon className='hover-svg h-5 w-5 fill-seagreen' />
        </button>
        <div className='overflow-y-auto py-4'>
          <NavLink
            to={'/'}
            className='flex items-center rounded-lg p-2.5 hover:text-prussianblue dark:hover:text-white'
            onClick={onClick}
          >
            <HouseIcon className='h-6 w-6 stroke-seagreen hover:stroke-prussianblue dark:stroke-lightblue dark:hover:stroke-white' />
            <span className='ml-3'>{t('header.firstLink')}</span>
          </NavLink>

          <NavLink
            to={'/graphi'}
            className='flex items-center rounded-lg p-2.5 hover:text-prussianblue dark:hover:text-white'
            onClick={onClick}
          >
            <GraphiIcon className='hover-svg h-6 w-6 fill-seagreen' />
            <span className='ml-3'>{t('header.secondLink')}</span>
          </NavLink>

          {user ? (
            <div className='dashboard'>
              <div className='flex flex-col items-center'>
                {/* <NavLink
                  to={'/'}
                  className='login-button button-hover bg-mainblue dark:text-darkblue ml-2 text-center text-white dark:bg-lightblue'
                >
                  {t('header.firstLink')}
                </NavLink> */}
                <div className='my-6'>{user.email}</div>
                <button
                  className='button-hover w-1/2 max-w-full rounded-full bg-seagreen p-1.5 text-white dark:bg-lightblue dark:text-prussianblue'
                  onClick={logout}
                >
                  {t('header.sixLink')}
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to={'/signin'}
                className='flex items-center rounded-lg p-2.5 transition-all hover:text-prussianblue dark:hover:text-white'
                onClick={onClick}
              >
                <SignInIcon className='h-6 w-6 stroke-seagreen transition-all hover:stroke-prussianblue dark:stroke-lightblue dark:hover:stroke-white' />

                <span className='ml-3'>{t('header.thirdLink')}</span>
              </NavLink>
              <NavLink
                to={'/signup'}
                className='flex items-center rounded-lg p-2.5 transition-all hover:text-prussianblue dark:hover:text-white'
                onClick={onClick}
              >
                <SignUpIcon className='h-6 w-6 stroke-seagreen transition-all hover:stroke-prussianblue dark:stroke-lightblue dark:hover:stroke-white' />

                <span className='ml-3'>{t('header.fourthLink')}</span>
              </NavLink>
            </>
          )}

          <div className='flex justify-center'>
            <Toggle onClick={handlerDark} />
            <Lang onClick={handlerLang} />
          </div>
        </div>
      </div>
    </>
  )
}
