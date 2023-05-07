import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Toggle } from '@/components'

export const Header = () => {
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const handlerDark = () => {
    setDark(!dark)
  }
  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-xl justify-between'>
      <Nav />

      <div className='settings'>
        <Toggle
          text='darkmode'
          onChange={handlerDark}
          choise={dark}
        />
        <Toggle text='rus' />
      </div>
      <div className='flex gap-7'>
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
      </div>
    </header>
  )
}
