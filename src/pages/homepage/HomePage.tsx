import homeimage from '@/assets/homepage.svg'
import { Button } from '@/components/button/Button'
import { SVGComponent } from '@/components/svgComponent/SvgComponent'

export const HomePage = () => {
  return (
    <>
      <div className='flex h-full w-full grow items-start justify-center gap-7'>
        <div className='mt-[20%] flex w-full shrink grow basis-0.5 flex-col'>
          <h1 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h1>
          <div className='text-2xl'>Application for your queries</div>
          <div>придумать что еще тут написать</div>
          <div className='mt-5 flex gap-7'>
            <Button
              classes={
                'w-24 rounded-full border border-solid border-mainblue bg-mainblue p-1.5 text-white hover:bg-hoverblue hover:border-hoverblue'
              }
              text='Sign in'
            />
            <Button
              classes={
                'w-24 rounded-full border border-solid border-mainblue p-1.5 hover:text-white hover:bg-hoverblue hover:border-hoverblue'
              }
              text='Sign up'
            />
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
    </>
  )
}
