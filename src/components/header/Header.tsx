// import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='link'>
        <a
          className='link-item active'
          href='#'
        >
          home
        </a>
        <a
          className='link-item'
          href='#'
        >
          sign in/sign up
        </a>
        <a
          className='link-item'
          href='#'
        >
          graphiql
        </a>
      </div>
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
