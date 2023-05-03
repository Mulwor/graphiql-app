/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Homeimage } from '@/assets/homepage.svg'
import { Button } from '@/components/button/Button'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

export const HomePage = () => {
  return (
    <div className='mx-auto flex h-full max-w-screen-lg flex-col'>
      <Header />
      <div className='flex w-full grow items-start justify-center gap-7'>
        <div className='mt-[20%] flex w-full shrink grow basis-0.5 flex-col'>
          <h1 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h1>
          <div className='text-2xl'>Application for your queries</div>
          <div>придумать что еще тут написать</div>
          <div className='mt-5 flex gap-7'>
            <Button className={'login-button button-hover bg-mainblue text-white'}>
              <a href='#'>Sign in</a>
            </Button>
            <Button className={'login-button button-hover'}>
              <a href='#'>Sign in</a>
            </Button>
          </div>
        </div>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          <Homeimage />
        </div>
      </div>
      <Footer />
    </div>
  )
}
