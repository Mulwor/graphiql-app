import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ReactComponent as Github } from '@/assets/github.svg'
import { ReactComponent as RSS } from '@/assets/rsschool.svg'

type GithubType = {
  name: string
  path: string
}

const githubLink: GithubType[] = [
  {
    name: 'Mulwor',
    path: 'https://github.com/Mulwor',
  },
  {
    name: 'sodapng',
    path: 'https://github.com/sodapng',
  },
  {
    name: 'YuliDemins',
    path: 'https://github.com/YuliDemins',
  },
]

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='mt-4 shrink-0'>
      <div className='items-center justify-between px-5 sm:flex'>
        <div className='flex items-center justify-center gap-x-1.5 self-center text-sm font-medium sm:justify-start'>
          {githubLink.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              target='_blank'
            >
              <Github className='fill-seagreen transition-all hover:fill-prussianblue dark:fill-sky dark:hover:fill-white' />
            </Link>
          ))}
        </div>
        <Link
          to='https://rs.school/react/'
          className='flex justify-center'
          target='_blank'
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
