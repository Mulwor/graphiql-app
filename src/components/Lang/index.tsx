import { useAppSelector } from '@/store'

type LangProp = {
  onClick: () => void
}

export const Lang = ({ onClick }: LangProp) => {
  const isRu = useAppSelector((state) => state.setting.isRu)

  return (
    <button
      id='lang-toggle'
      type='button'
      className='fill-seagreen p-2.5 transition-all hover:text-prussianblue focus:outline-none dark:text-lightblue dark:hover:text-white'
      onClick={onClick}
    >
      {isRu ? 'RU' : 'EN'}
    </button>
  )
}
