import { Outlet } from 'react-router-dom'

import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = () => {
  return (
    <div className='w-full bg-whitesmoke text-seagreen dark:bg-prussianblue dark:text-sky'>
      <div className='mx-auto flex min-h-screen flex-col justify-between'>
        <Header />
        <main className='flex shrink grow basis-full justify-center'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
