import { useState } from 'react'

import { ReactComponent as Menu } from '@/assets/menu.svg'
import { Modal } from '@/components'

export const Burger = () => {
  const [modal, setModal] = useState<boolean>(false)

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <div className='flex self-center p-2.5 md:hidden'>
      <Menu
        className='hover-svg h-8 w-8 rounded-md hover:bg-white hover:stroke-deepsea focus:outline-none dark:stroke-sky dark:hover:bg-deepsea dark:hover:stroke-white'
        onClick={handleClick}
      />
      {modal && <Modal onClick={handleClick} />}
    </div>
  )
}
