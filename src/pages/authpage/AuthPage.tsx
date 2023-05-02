import { SVGComponent } from '@root/src/components/svgComponent/SvgComponent'

import authimage from '@/assets/authpage.svg'

export const AuthPage = () => {
  return (
    <>
      <div className='flex h-full w-full grow items-start justify-center gap-7'>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          {
            <SVGComponent
              src={authimage}
              classes={'max-w-full justify-start shrink grow-0 basis-0.5'}
            />
          }
        </div>
        <div className='mt-10 flex w-full shrink grow basis-0.5 flex-col'>
          <h2 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h2>
          <div className='text-2xl'>Authoruzation</div>
        </div>
      </div>
    </>
  )
}
