import './nav.css'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='links'>
        <li className='link'>
          <a
            className='link-item active'
            href='#'
          >
            home
          </a>
        </li>
        <li className='link'>
          <a
            className='link-item'
            href='#'
          >
            sign in/sign up
          </a>
        </li>
        <li className='link'>
          <a
            className='link-item'
            href='#'
          >
            graphiql
          </a>
        </li>
      </ul>
    </nav>
  )
}
