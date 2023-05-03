/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Authimage } from '@/assets/authpage.svg'

export const AuthPage = () => {
  return (
    <>
      <div className='flex h-full w-full grow items-start justify-center gap-7'>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          <Authimage />
        </div>
        <div className='mt-10 flex w-full shrink grow basis-0.5 flex-col'>
          <h2 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h2>
          <div className='text-2xl'>Authoruzation</div>
        </div>
      </div>
    </>
  )
}
