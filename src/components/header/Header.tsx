import { Link } from 'react-router-dom'

import { Nav } from '@/components/nav/Nav'

export const Header = () => {
  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-lg justify-between'>
      <Nav />

      <div className='settings'>
        <a href='#'>схема</a>
        <a href='#'>язык</a>
      </div>
      <div className='uppercase'>
        <Link
          to={'/auth'}
          className='mr-5 pb-2.5 hover:border-b-2 hover:border-hoverblue hover:text-hoverblue'
        >
          sign in
        </Link>
        <Link
          to={'/auth'}
          className='pb-2.5 hover:border-b-2 hover:border-hoverblue hover:text-hoverblue'
        >
          sign up
        </Link>
      </div>
    </header>
  )
}
