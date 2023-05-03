/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom'

import { ReactComponent as Github } from '@/assets/icon-github.svg'
import { ReactComponent as RSS } from '@/assets/rs_school.svg'

export const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='items-center justify-between sm:flex'>
        <ul className='flex items-center justify-center gap-x-1.5 self-center text-sm font-medium sm:justify-start'>
          <li>
            <Link to='https://github.com/Mulwor'>
              <Github className='fill-mainblue hover:fill-hoverblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/sodapng'>
              <Github className='fill-mainblue hover:fill-hoverblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/YuliDemins'>
              <Github className='fill-mainblue hover:fill-hoverblue dark:fill-lightblue dark:hover:fill-white' />
            </Link>
          </li>
        </ul>
        <Link
          to='https://rs.school/js/'
          className='flex justify-center'
        >
          <RSS
            className='fill-mainblue hover:fill-hoverblue dark:fill-lightblue dark:hover:fill-white'
            width={70}
          />
        </Link>
        <div className='justify-center text-center text-sm sm:flex'>
          © 2023 <Link to='https://github.com/Mulwor/graphiql-app'>QraphiQL</Link>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  )
}
