import homeimage from '@/assets/homepage.svg'
import { Button } from '@/components/button/Button'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { SVGComponent } from '@/components/svgComponent/SvgComponent'

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
            <Button
              className={
                'w-24 rounded-full border border-solid border-mainblue bg-mainblue p-1.5 text-white hover:border-hoverblue hover:bg-hoverblue'
              }
            >
              <a href='#'>Sign in</a>
            </Button>
            <Button
              className={
                'w-24 rounded-full border border-solid border-mainblue p-1.5 hover:border-hoverblue hover:bg-hoverblue hover:text-white'
              }
            >
              <a href='#'>Sign in</a>
            </Button>
          </div>
        </div>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          {
            <SVGComponent
              src={homeimage}
              classes={'max-w-full justify-start shrink grow-0 basis-0.5'}
            />
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
