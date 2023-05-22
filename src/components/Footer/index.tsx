import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ReactComponent as Github } from '@/assets/github.svg'
import { ReactComponent as RSS } from '@/assets/rsschool.svg'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='mt-4'>
      <div className='shrink-0 items-center justify-between px-5 sm:flex'>
        <ul className='flex items-center justify-center gap-x-1.5 self-center text-sm font-medium sm:justify-start'>
          <li>
            <Link to='https://github.com/Mulwor'>
              <Github className='fill-seagreen transition-all hover:fill-prussianblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/sodapng'>
              <Github className='fill-seagreen transition-all hover:fill-prussianblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/YuliDemins'>
              <Github className='fill-seagreen transition-all hover:fill-prussianblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
        </ul>
        <Link
          to='https://rs.school/js/'
          className='flex justify-center'
        >
          <RSS
            className='hover-svg'
            width={70}
          />
        </Link>
        <div className='justify-center text-center text-sm sm:flex'>
          © 2023 <Link to='https://github.com/Mulwor/graphiql-app'>QraphiQL</Link>
          <div>{t('rights')}</div>
        </div>
      </div>
    </footer>
  )
}
