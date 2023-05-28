import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ReactComponent as HomeImage } from '@/assets/home.svg'
import { Button, TeamInfo } from '@/components'
import { auth } from '@/firebase.config'

export const HomePage = () => {
  const { t } = useTranslation()
  const [user] = useAuthState(auth)

  return (
    <>
      <div className='mx-auto max-w-7xl shrink grow gap-7 px-5 sm:flex sm:columns-2'>
        <div className='mx-auto max-w-md shrink grow flex-col sm:flex lg:mt-[14%]'>
          <h1 className='text-4xl font-bold uppercase text-fuchsia'>{t('graphi')}</h1>
          <div className='text-2xl'> {t('heading')}</div>
          <div> {t('paragraph')}</div>
          <div className='mt-5'>
            <Button
              className={
                'button-hover w-1/2 max-w-full rounded-full bg-seagreen p-1.5 text-white dark:bg-sky dark:text-prussianblue sm:w-full md:w-1/2'
              }
            >
              {user ? (
                <Link to={'/editor'}> {t('getStarted')}</Link>
              ) : (
                <Link to={'/register'}> {t('getStarted')}</Link>
              )}
            </Button>
          </div>
          <TeamInfo />
        </div>
        <div className='mx-auto max-w-md shrink grow sm:w-full lg:self-center'>
          <HomeImage />
        </div>
      </div>
    </>
  )
}
