import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button/Button'
import { Nav } from '@/components/nav/Nav'
import { Toggle } from '@/components/Toggle'

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
    <header className='mx-auto mb-8 flex w-full max-w-screen-lg justify-between'>
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
        <Button className={'login-button button-hover bg-mainblue text-white'}>
          <Link to={'/auth'}>Sign in</Link>
        </Button>
        <Button className={'login-button button-hover'}>
          <Link to={'/auth'}>Sign up</Link>
        </Button>
      </div>
    </header>
  )
}
