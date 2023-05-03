import { Button } from '@/components/button/Button'
import { Nav } from '@/components/nav/Nav'

export const Header = () => {
  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-lg justify-between'>
      <Nav />

      <div className='settings'>
        <label className='relative mr-3 inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            value=''
            className='peer sr-only'
          />
          <div className="bg-write peer h-6 w-11 rounded-full border border-mainblue after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-mainblue after:bg-mainblue after:transition-all after:content-[''] peer-checked:bg-mainblue peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white"></div>
          <span className='ml-1 text-sm'>Dark mode</span>
        </label>
        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            value=''
            className='peer sr-only'
          />
          <div className="bg-write peer h-6 w-11 rounded-full border border-mainblue after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-mainblue after:bg-mainblue after:transition-all after:content-[''] peer-checked:bg-mainblue peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white"></div>
          <span className='ml-1 text-sm'>Russian</span>
        </label>
      </div>
      <div className='flex gap-7'>
        <Button className={'login-button button-hover bg-mainblue text-white'}>
          <a href='#'>Sign in</a>
        </Button>
        <Button className={'login-button button-hover'}>
          <a href='#'>Sign in</a>
        </Button>
      </div>
    </header>
  )
}
