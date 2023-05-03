/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom'

import { ReactComponent as Github } from '@/assets/icon-github.svg'
import { ReactComponent as RSS } from '@/assets/rs_school.svg'

export const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='mx-auto w-full max-w-screen-xl md:flex md:items-center md:justify-between'>
        <span className='text-sm sm:text-center'>
          © 2023 <Link to='https://github.com/Mulwor/graphiql-app'>QraphiQL</Link>. All Rights
          Reserved.
        </span>
        <Link to='https://rs.school/js/'>
          <RSS
            className='fill-mainblue hover:fill-hoverblue'
            width={70}
          />
        </Link>
        <ul className='mt-3 flex flex-wrap items-center gap-x-1.5 text-sm font-medium sm:mt-0'>
          <li>
            <Link to='https://github.com/Mulwor'>
              <Github className='fill-mainblue hover:fill-hoverblue' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/sodapng'>
              <Github className='fill-mainblue hover:fill-hoverblue' />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/YuliDemins'>
              <Github className='fill-mainblue hover:fill-hoverblue' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
