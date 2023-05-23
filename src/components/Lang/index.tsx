import { useAppSelector } from '@/store'

type LangProp = {
  onClick: () => void
}

export const Lang = ({ onClick }: LangProp) => {
  const lang = useAppSelector((state) => state.setting.lang)

  return (
    <button
      id='lang-toggle'
      type='button'
      className='fill-seagreen p-2.5 transition-all hover:text-prussianblue focus:outline-none dark:text-lightblue dark:hover:text-white'
      onClick={onClick}
    >
      {lang === 'en' ? 'RU' : 'EN'}
    </button>
  )
}
