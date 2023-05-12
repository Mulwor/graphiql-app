import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  const { t } = useTranslation()
  return (
    <nav className='hidden uppercase md:flex'>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'mr-5 border-b-2 border-seagreen pb-2.5 hover:border-deepsea dark:hover:border-white dark:hover:text-white'
            : 'mr-5 border-b-2 border-whitesmoke pb-2.5 hover:border-b-2 hover:border-deepsea dark:border-prussianblue dark:hover:border-white dark:hover:text-white'
        }
      >
        <div>{t('header.firstLink')}</div>
      </NavLink>

      <NavLink
        to={'/graphi'}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-seagreen pb-2.5 hover:border-deepsea dark:hover:border-white dark:hover:text-white'
            : 'border-b-2 border-whitesmoke pb-2.5 hover:border-b-2 hover:border-deepsea dark:border-prussianblue dark:hover:border-white dark:hover:text-white'
        }
      >
        <div>{t('header.secondLink')}</div>
      </NavLink>
    </nav>
  )
}
