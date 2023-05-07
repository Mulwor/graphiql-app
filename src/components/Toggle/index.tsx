import { ReactComponent as Dark } from '@/assets/dark.svg'
import { ReactComponent as Light } from '@/assets/light.svg'
import { useAppSelector } from '@/store'

type ToggleProp = {
  onClick: () => void
}

export const Toggle = ({ onClick }: ToggleProp) => {
  const isDark = useAppSelector((state) => state.theme.isDark)

  return (
    <button
      id='theme-toggle'
      type='button'
      className='fill-mainblue p-2.5 hover:fill-hoverblue focus:outline-none dark:fill-lightblue dark:hover:fill-white'
      onClick={onClick}
    >
      <Dark
        className={isDark ? 'hidden h-5 w-5 focus:outline-none' : 'h-5 w-5 focus:outline-none'}
      />
      <Light
        className={isDark ? 'h-5 w-5 focus:outline-none' : 'hidden h-5 w-5 focus:outline-none'}
      />
    </button>
  )
}
