// import { Link } from 'react-router-dom'
import './header.css'

import { Nav } from '../nav/Nav'

export const Header = () => {
  return (
    <header className='header'>
      <Nav />

      <div className='settings'>
        <a href='#'>схема</a>
        <a href='#'>язык</a>
      </div>
      <div className='sign'>
        <a
          className='sign-item'
          href='#'
        >
          sign in
        </a>
        <a
          className='sign-item'
          href='#'
        >
          sign up
        </a>
      </div>
    </header>
  )
}
