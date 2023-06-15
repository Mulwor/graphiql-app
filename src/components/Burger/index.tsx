import { useState } from 'react'

import { ReactComponent as Menu } from '@/assets/menu.svg'
import { Model } from '@/components'

export const Burger = () => {
  const [model, setModel] = useState<boolean>(false)

  const handleClick = () => {
    setModel(!model)
  }

  return (
    <div className='flex self-center rounded-lg p-2.5 hover:bg-white dark:hover:bg-deepsea md:hidden'>
      <Menu
        className='hover-svg h-8 w-8 hover:stroke-deepsea focus:outline-none dark:stroke-sky'
        onClick={handleClick}
      />
      {model && <Model onClick={handleClick} />}
    </div>
  )
}
