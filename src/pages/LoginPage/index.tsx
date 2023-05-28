import 'react-toastify/dist/ReactToastify.css'

import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ReactComponent as AuthImage } from '@/assets/auth.svg'
import { auth, logInWithEmailAndPassword } from '@/firebase.config'
import { notify } from '@/lib'

type Inputs = {
  email: string
  password: string
}

export const LoginPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  function handleLogin({ email, password }: Inputs) {
    logInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/editor')
      })
      .catch(() => {
        notify(t('wrongAll'))
      })
  }

  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate('/editor')
    }
  }, [navigate, user])

  return (
    <>
      <div className='mx-auto flex max-w-7xl shrink grow flex-col-reverse gap-7 px-5 sm:columns-2 sm:flex-row'>
        <div className='mx-auto w-full max-w-md shrink grow lg:self-center'>
          <AuthImage />
        </div>
        <div className='mx-auto w-full max-w-lg px-5 sm:flex sm:flex-col sm:p-0 lg:mt-[6%]'>
          <h2 className='text-4xl font-bold uppercase text-fuchsia'>{t('graphi')}</h2>
          <div className='text-2xl'>{t('signIn')}</div>

          <div className='mt-10'>
            <div className='flex flex-col'>
              <form onSubmit={handleSubmit(handleLogin)}>
                <input
                  {...register('email', {
                    required: `${t('requiredEmail')}`,
                    minLength: {
                      value: 10,
                      message: `${t('messageEmail')}`,
                    },
                    pattern: {
                      value: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
                      message: 'Invalid email',
                    },
                  })}
                  type='email'
                  id='email'
                  placeholder='E-mail'
                  className='block w-full rounded-lg border p-2.5 text-seagreen placeholder-gray focus:border-seagreen focus:ring-seagreen'
                />

                <div style={{ height: 20, color: 'red', fontSize: 14 }}>
                  {errors?.email && <p className='error'>{errors?.email?.message?.toString()}</p>}
                </div>

                <input
                  {...register('password', {
                    required: `${t('requiredPassword')}`,
                    minLength: {
                      value: 8,
                      message: `${t('messagePassword')}`,
                    },
                    validate: {
                      checkLength: (value) => value.length >= 8,
                      matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!#$*@])/.test(value),
                    },
                  })}
                  type='password'
                  id='confirm_password'
                  placeholder='Password'
                  className='block w-full rounded-lg border p-2.5 text-seagreen placeholder-gray focus:border-seagreen focus:ring-seagreen'
                />

                <div style={{ height: 20, color: 'red', fontSize: 14 }}>
                  {errors?.password && (
                    <p className='error'>{errors?.password?.message?.toString()}</p>
                  )}

                  {errors.password?.type === 'matchPattern' && <p>{t('patternPassword')}</p>}
                </div>

                <button className='button-hover mt-10 w-full max-w-full justify-center rounded-full bg-seagreen p-1.5 text-white dark:bg-sky dark:text-prussianblue md:w-1/2'>
                  {t('signIn')}
                </button>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
