/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom'

import { ReactComponent as Homeimage } from '@/assets/homepage.svg'
import { Button } from '@/components/button/Button'

export const HomePage = () => {
  return (
    <>
      <div className='flex h-full w-full grow items-start justify-center gap-7'>
        <div className='mt-[20%] flex w-full shrink grow basis-0.5 flex-col'>
          <h1 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h1>
          <div className='text-2xl'>Application for your queries</div>
          <div>придумать что еще тут написать</div>
          <div className='mt-5 flex gap-7'>
            <Button className={'login-button button-hover bg-mainblue text-white'}>
              <Link to={'/auth'}>Sign in</Link>
            </Button>
            <Button className={'login-button button-hover'}>
              <Link to={'/auth'}>Sign in</Link>
            </Button>
          </div>
        </div>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          <Homeimage />
        </div>
      </div>
    </>
  )
}
