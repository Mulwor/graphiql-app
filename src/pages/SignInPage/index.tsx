import 'react-toastify/dist/ReactToastify.css'

import { auth, logInWithEmailAndPassword } from '@root/src/firebase.config'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import { ReactComponent as AuthImage } from '@/assets/auth.svg'

type Inputs = {
  email: string
  password: string
}

export const SignInPage = () => {
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
        navigate('/editer')
      })
      .catch(() => {
        toast.error(t('wrongAll'))
      })
  }

  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate('/editer')
    }
  }, [navigate, user])

  return (
    <>
      <div className='mx-auto flex max-w-7xl shrink grow flex-col-reverse gap-7 sm:columns-2 sm:flex-row'>
        <div className='mx-auto w-full max-w-md shrink grow lg:self-center'>
          <AuthImage />
        </div>
        <div className='mx-auto w-full max-w-lg px-5 sm:flex sm:flex-col sm:p-0 lg:mt-[6%]'>
          <h2 className='text-4xl font-bold uppercase text-fuchsia'>GraphiQL</h2>
          <div className='text-2xl'>Sign in</div>

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
                  placeholder='thisIsYourEmail@mail.com'
                  className='placeholder-gray-400 block w-full rounded-lg border p-2.5 text-seagreen focus:border-seagreen focus:ring-seagreen'
                />

                <div style={{ height: 20 }}>
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
                  placeholder='**************'
                  className='placeholder-gray-400 block w-full rounded-lg border p-2.5 text-seagreen focus:border-seagreen focus:ring-seagreen'
                />

                <div style={{ height: 20 }}>
                  {errors?.password && (
                    <p className='error'>{errors?.password?.message?.toString()}</p>
                  )}

                  {errors.password?.type === 'matchPattern' && <p>{t('patternPassword')}</p>}
                </div>

                <button className='button-hover mt-10 w-full max-w-full justify-center rounded-full bg-seagreen p-1.5 text-white dark:bg-lightblue dark:text-prussianblue md:w-1/2'>
                  Sign in grapiQL
                </button>

                <ToastContainer
                  position='top-center'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
