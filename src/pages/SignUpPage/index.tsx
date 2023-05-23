import 'react-toastify/dist/ReactToastify.css'

import { auth, registerWithEmailAndPassword } from '@root/src/firebase.config'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import { ReactComponent as AuthImage } from '@/assets/auth.svg'

type Inputs = {
  name: string
  email: string
  password: string
}

export const SignUpPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  function handleLogin({ name, email, password }: Inputs) {
    registerWithEmailAndPassword(name, email, password)
      .then(() => {
        navigate('/editor')
      })
      .catch(() => {
        toast.error(t('wrongEmail'))
      })
  }
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate('/editor')
    }
  }, [navigate, user])
  return (
    <div className='mx-auto flex max-w-7xl shrink grow flex-col-reverse gap-7 px-5 sm:columns-2 sm:flex-row'>
      <div className='mx-auto w-full max-w-md shrink grow lg:self-center'>
        <AuthImage />
      </div>
      <div className='mx-auto w-full max-w-lg px-5 sm:flex sm:flex-col sm:p-0 lg:mt-[6%]'>
        <h2 className='text-4xl font-bold uppercase text-fuchsia'>GraphiQL</h2>
        <div className='text-2xl'>Sign up</div>

        <div className='mt-10'>
          <div className='flex flex-col'>
            <form onSubmit={handleSubmit(handleLogin)}>
              <input
                type='text'
                className='block w-full rounded-lg border p-2.5 text-seagreen placeholder-gray focus:border-seagreen focus:ring-seagreen'
                {...register('name', {
                  required: `${t('requiredName')}`,
                })}
                placeholder='Write your name'
              />

              <div style={{ height: 40, color: 'red', fontSize: 14 }}>
                {errors?.name && <p className='error'>{errors?.name?.message?.toString()}</p>}
              </div>

              <input
                {...register('email', {
                  required: `${t('requiredEmail')}`,
                  minLength: {
                    value: 10,
                    message: `${t('messageEmail')}`,
                  },
                  pattern: {
                    value: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
                    message: `${t('messageEmail')}`,
                  },
                })}
                type='email'
                id='email'
                placeholder='email@mail.com'
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
                placeholder='**************'
                className='block w-full rounded-lg border p-2.5 text-seagreen placeholder-gray focus:border-seagreen focus:ring-seagreen'
              />

              <div style={{ height: 20, color: 'red', fontSize: 14 }}>
                {errors?.password && (
                  <p className='error'>{errors?.password?.message?.toString()}</p>
                )}

                {errors.password?.type === 'matchPattern' && <p>{t('patternPassword')}</p>}
              </div>
              <button className='button-hover mt-10 w-full max-w-full justify-center rounded-full bg-seagreen p-1.5 text-white dark:bg-sky dark:text-prussianblue md:w-1/2'>
                Sign up
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
  )
}
