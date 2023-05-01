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
          className='mr-5 pb-2.5 hover:border-b-2 hover:border-hoverblue hover:text-hoverblue'
          href='#'
        >
          sign in
        </a>
        <a
          className='pb-2.5 hover:border-b-2 hover:border-hoverblue hover:text-hoverblue'
          href='#'
        >
          sign up
        </a>
      </div>
    </header>
  )
}
