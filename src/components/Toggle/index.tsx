import { ReactComponent as Dark } from '@/assets/dark.svg'
import { ReactComponent as Light } from '@/assets/light.svg'
import { useAppSelector } from '@/store'

type ToggleProp = {
  onClick: () => void
}

export const Toggle = ({ onClick }: ToggleProp) => {
  const isDark = useAppSelector((state) => state.setting.isDark)

  return (
    <button
      id='theme-toggle'
      type='button'
      className='p-2.5'
      onClick={onClick}
    >
      <Dark className={isDark ? 'hover-svg hidden w-5' : 'hover-svg w-5'} />
      <Light className={isDark ? 'hover-svg w-5' : 'hover-svg hidden w-5'} />
    </button>
  )
}
