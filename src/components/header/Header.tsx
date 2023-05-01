// import { Link } from 'react-router-dom'

import { Nav } from '@/components/nav/Nav'

export const Header = () => {
  return (
    <header className='mb-8 flex w-full justify-between'>
      <Nav />

      <div className='settings'>
        <a href='#'>схема</a>
        <a href='#'>язык</a>
      </div>
      <div className='uppercase'>
        <a
          className='header-link mr-5'
          href='#'
        >
          sign in
        </a>
        <a
          className='header-link'
          href='#'
        >
          sign up
        </a>
      </div>
    </header>
  )
}
