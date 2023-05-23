import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className='title'>404</h1>
      <p className='info'>
        {t('notFound')}
        <Link to='/'>{t('home')}</Link>
      </p>
    </div>
  )
}
