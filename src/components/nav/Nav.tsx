import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='flex uppercase'>
        <li className='mr-5 hover:border-hoverblue hover:text-hoverblue'>
          <NavLink
            to={'/'}
            className='pb-2.5 hover:border-b-2 active:border-mainblue '
          >
            home
          </NavLink>
        </li>
        <li className='hover:border-hoverblue hover:text-hoverblue'>
          <NavLink
            to={'/graphi'}
            className='pb-2.5 hover:border-b-2 active:border-mainblue'
          >
            graphiql
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
