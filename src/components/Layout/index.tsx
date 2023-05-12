import { Outlet } from 'react-router-dom'

import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = () => {
  return (
    <div className='min-h-screen w-full bg-whitesmoke px-5 pb-2.5 text-seagreen dark:bg-prussianblue dark:text-lightblue sm:h-screen'>
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
