import { useState } from 'react'

import { ReactComponent as Menu } from '@/assets/menu.svg'
import { Modal } from '@/components'

export const Burger = () => {
  const [modal, setModal] = useState<boolean>(false)

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <div className='flex self-center rounded-lg p-2.5 hover:bg-white dark:hover:bg-deepsea md:hidden'>
      <Menu
        className='hover-svg h-8 w-8 hover:stroke-deepsea focus:outline-none dark:stroke-sky'
        onClick={handleClick}
      />
      {modal && <Modal onClick={handleClick} />}
    </div>
  )
}
