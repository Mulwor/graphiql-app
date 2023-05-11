import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ReactComponent as HomeImage } from '@/assets/home.svg'
import { Button } from '@/components'

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='mx-auto max-w-7xl shrink grow gap-7 sm:flex sm:columns-2 '>
        <div className='mx-auto max-w-md shrink grow flex-col sm:mt-[10%] sm:flex md:mt-[20%]'>
          <h1 className='text-4xl font-bold uppercase text-mainred'>
            {t('section.firstblock.title')}
          </h1>
          <div className='text-2xl'> {t('section.firstblock.heading')}</div>
          <div> {t('section.firstblock.paragraph')}</div>
          <div className='mt-5'>
            <Button
              className={
                'button-hover w-1/2 max-w-full rounded-full bg-mainblue p-1.5 text-white dark:bg-lightblue dark:text-darkblue'
              }
            >
              <Link to={'/auth'}>{t('section.firstblock.button')}</Link>
            </Button>
          </div>
        </div>
        <div className='mx-auto max-w-md shrink grow sm:w-full lg:self-center'>
          <HomeImage />
        </div>
      </div>
    </>
  )
}
