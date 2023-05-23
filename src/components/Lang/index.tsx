import { useTranslation } from 'react-i18next'

export const Lang = () => {
  const { i18n } = useTranslation()

  const handleClick = () => {
    const lng = i18n.language === 'ru' ? 'en' : 'ru'
    void i18n.changeLanguage(lng)
  }

  return (
    <button
      id='lang-toggle'
      type='button'
      className='fill-seagreen p-2.5 transition-all hover:text-prussianblue focus:outline-none dark:text-sky dark:hover:text-white'
      onClick={handleClick}
    >
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </button>
  )
}
