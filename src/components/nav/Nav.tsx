import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='flex uppercase'>
        <li className='mr-5 hover:border-hoverblue hover:text-hoverblue'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-mainblue pb-2.5 hover:border-hoverblue'
                : 'pb-2.5 hover:border-b-2'
            }
          >
            home
          </NavLink>
        </li>
        <li className='hover:border-hoverblue hover:text-hoverblue'>
          <NavLink
            to={'/graphi'}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-mainblue pb-2.5 hover:border-hoverblue'
                : 'pb-2.5 hover:border-b-2'
            }
          >
            graphiql
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
