/// <reference types="vite-plugin-svgr/client" />
import { Button } from '@root/src/components/Button'
import { Link } from 'react-router-dom'

import { ReactComponent as HomeImage } from '@/assets/home.svg'

export const HomePage = () => {
  return (
    <>
      <div className='mx-auto shrink grow gap-7 sm:flex sm:columns-2'>
        <div className='mx-auto max-w-md shrink grow flex-col sm:mt-[10%] sm:flex md:mt-[20%]'>
          <h1 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h1>
          <div className='text-2xl'>Application for your queries</div>
          <div>придумать что еще тут написать</div>
          <div className='mt-5'>
            <Button
              className={
                'button-hover w-1/2 max-w-full rounded-full bg-mainblue p-1.5 text-white dark:bg-lightblue dark:text-darkblue'
              }
            >
              <Link to={'/auth'}>Get started</Link>
            </Button>
          </div>
        </div>
        <div className='mx-auto max-w-md shrink grow sm:w-full lg:self-center'>
          <HomeImage />
        </div>
      </div>
    </>
  )
}
