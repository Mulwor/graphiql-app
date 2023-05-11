import { settingActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '@/assets/close.svg'
import { ReactComponent as GraphiIcon } from '@/assets/graphql.svg'
import { ReactComponent as HouseIcon } from '@/assets/house.svg'
import { ReactComponent as Menu } from '@/assets/menu.svg'
import { ReactComponent as SignInIcon } from '@/assets/signin.svg'
import { ReactComponent as SignUpIcon } from '@/assets/signup.svg'
import { Lang, Toggle } from '@/components'

export const Burger = () => {
  const [modal, setModal] = useState<boolean>(false)

  const handleClick = () => {
    setModal(!modal)
    console.log('modal')
  }

  return (
    <div className='flex self-center p-2.5 md:hidden'>
      <Menu
        className='hover-svg h-8 w-8 hover:stroke-hoverblue focus:outline-none dark:stroke-lightblue dark:hover:stroke-white'
        onClick={handleClick}
      />
      {modal && <Modal onClick={handleClick} />}
    </div>
  )
}

export type ModalType = {
  onClick: () => void
}

export const Modal = ({ onClick }: ModalType) => {
  const isDark = useAppSelector((state) => state.setting.isDark)
  const isRu = useAppSelector((state) => state.setting.isRu)
  const actions = useActionCreators(settingActions)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handlerDark = () => {
    actions.setIsDark({ isDark: !isDark })
  }

  const handlerLang = () => {
    actions.setIsRu({ isRu: !isRu })
  }

  return (
    <div
      className='fixed left-0 top-0 z-40 h-screen w-screen bg-opacitycolor backdrop-blur'
      onClick={onClick}
    >
      <div className='fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto bg-white p-4 shadow-2xl transition-all dark:bg-modaldark dark:text-lightblue'>
        <h5 className='font-bold uppercase'>Menu</h5>
        <button
          type='button'
          onClick={onClick}
          className='absolute right-2.5 top-2.5 inline-flex items-center rounded-lg p-1.5'
        >
          <CloseIcon className='hover-svg h-5 w-5 fill-mainblue' />
        </button>
        <div className='overflow-y-auto py-4'>
          <NavLink
            to={'/'}
            className='flex items-center rounded-lg p-2.5 hover:text-hoverblue dark:hover:text-white'
            onClick={onClick}
          >
            <HouseIcon className='h-6 w-6 stroke-mainblue hover:stroke-hoverblue dark:stroke-lightblue dark:hover:stroke-white' />
            <span className='ml-3'>Home</span>
          </NavLink>

          <NavLink
            to={'/graphi'}
            className='flex items-center rounded-lg p-2.5 hover:text-hoverblue dark:hover:text-white'
            onClick={onClick}
          >
            <GraphiIcon className='hover-svg h-6 w-6 fill-mainblue' />
            <span className='ml-3'>GraphiQL</span>
          </NavLink>

          <NavLink
            to={'/signin'}
            className='flex items-center rounded-lg p-2.5 hover:text-hoverblue dark:hover:text-white'
            onClick={onClick}
          >
            <SignInIcon className='h-6 w-6 stroke-mainblue hover:stroke-hoverblue dark:stroke-lightblue dark:hover:stroke-white' />

            <span className='ml-3'>Sign In</span>
          </NavLink>

          <NavLink
            to={'/signup'}
            className='flex items-center rounded-lg p-2.5 hover:text-hoverblue dark:hover:text-white'
            onClick={onClick}
          >
            <SignUpIcon className='h-6 w-6 stroke-mainblue hover:stroke-hoverblue dark:stroke-lightblue dark:hover:stroke-white' />

            <span className='ml-3'>Sign Up</span>
          </NavLink>

          <div className='flex justify-center'>
            <Toggle onClick={handlerDark} />
            <Lang onClick={handlerLang} />
          </div>
        </div>
      </div>
    </div>
  )
}
