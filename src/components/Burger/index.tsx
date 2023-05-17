import { auth, logout } from '@root/src/firebase.config'
import { changeLanguage } from '@root/src/i18n'
import { settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

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
        className='hover-svg h-8 w-8 hover:stroke-deepsea focus:outline-none dark:stroke-lightblue dark:hover:stroke-white'
        onClick={handleClick}
      />
      {modal && <Modal onClick={handleClick} />}
    </div>
  )
}