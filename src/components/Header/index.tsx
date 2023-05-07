import { RootState, useActionCreators, useAppDispatch, useAppSelector } from '@root/src/store'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Toggle } from '@/components'
import { themeActions } from '@/store/slices'

export const Header = () => {
  const isDark = useAppSelector((state: RootState) => state.slice.isDark)
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

  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-xl justify-between'>
      <Nav />

      <div className='settings'>
        <Toggle onClick={handlerDark} />
      </div>
      <div className='flex gap-7'>
        <NavLink
          to={'/auth'}
          className='login-button button-hover bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
        >
          Sign in
        </NavLink>
        <NavLink
          to={'/auth'}
          className='login-button button-hover text-center'
        >
          Sign up
        </NavLink>
      </div>
    </header>
  )
}
