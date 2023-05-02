// import { Link } from 'react-router-dom'

import { Nav } from '@/components/nav/Nav'

export const Header = () => {
  return (
    <header className='mb-8 flex w-full justify-between'>
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
      <div className='uppercase'>
        <a
          className='header-link mr-5'
          href='#'
        >
          sign in
        </a>
        <a
          className='header-link'
          href='#'
        >
          sign up
        </a>
      </div>
    </header>
  )
}
