import { Outlet } from 'react-router-dom'

import { Footer } from '../Footer'
import { Header } from '../header/Header'

export const Layout = () => {
  return (
    <div className='h-screen w-full bg-backgroundcolor px-5 pb-2.5 pt-5 text-mainblue dark:bg-darkblue dark:text-lightblue'>
      <div className='mx-auto flex h-full max-w-7xl flex-col'>
        <Header />
        <main className='flex grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
