import { Outlet } from 'react-router-dom'

import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = () => {
  return (
    <div className='h-screen min-h-screen w-full bg-backgroundcolor px-5 pb-2.5 text-mainblue dark:bg-darkblue dark:text-lightblue'>
      <div className='mx-auto flex h-full flex-col'>
        <Header />
        <main className='flex grow justify-center'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
