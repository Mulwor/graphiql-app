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
      className='fill-mainblue p-2.5 hover:text-hoverblue focus:outline-none dark:text-lightblue dark:hover:text-white'
      onClick={onClick}
    >
      {isRu ? 'RU' : 'EN'}
    </button>
  )
}
