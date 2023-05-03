import { Outlet } from 'react-router-dom'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const Layout = () => {
  return (
    <div className='mx-auto flex h-full max-w-screen-lg flex-col bg-backgroundcolor dark:bg-darkblue'>
      <Header />
      <main className='flex grow items-start justify-center gap-7'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
