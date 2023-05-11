import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav flex uppercase'>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'mr-5 border-b-2 border-mainblue pb-2.5 hover:border-hoverblue dark:hover:border-white dark:hover:text-white'
            : 'mr-5 border-b-2 border-backgroundcolor pb-2.5 hover:border-b-2 hover:border-hoverblue dark:border-darkblue dark:hover:border-white dark:hover:text-white'
        }
      >
        home
      </NavLink>

      <NavLink
        to={'/graphi'}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-mainblue pb-2.5 hover:border-hoverblue dark:hover:border-white dark:hover:text-white'
            : 'border-b-2 border-backgroundcolor pb-2.5 hover:border-b-2 hover:border-hoverblue dark:border-darkblue dark:hover:border-white dark:hover:text-white'
        }
      >
        graphiql
      </NavLink>
    </nav>
  )
}
