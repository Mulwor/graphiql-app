import { auth, registerWithEmailAndPassword } from '@root/src/firebase.config'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ReactComponent as AuthImage } from '@/assets/auth.svg'

type Inputs = {
  name: string
  email: string
  password: string
}

export const SignUp = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  function handleLogin(data: Inputs) {
    registerWithEmailAndPassword(data.name, data.email, data.password)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (loading) return
    if (user) navigate('/')
  }, [user, loading, history])

  return (
    <div className='flex h-full w-full grow items-start justify-center gap-7'>
      <div className='flex h-full max-w-full shrink grow basis-0.5'>
        <AuthImage />
      </div>
      <div className='mt-10 flex w-full shrink grow basis-0.5 flex-col'>
        <h2 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h2>
        <div className='text-2xl'>Sign up</div>

        <div className='mt-10'>
          <div className='flex flex-col'>
            <form onSubmit={handleSubmit(handleLogin)}>
              <input
                type='text'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
                {...register('name', {
                  required: 'You need write your name',
                })}
                placeholder='Write your name'
              />

              <div style={{ height: 40 }}>
                {errors?.name && <p className='error'>{errors?.name?.message?.toString()}</p>}
              </div>

              <input
                {...register('email', {
                  required: 'You need write your email',
                  minLength: {
                    value: 10,
                    message: 'Email must have - minimum 10 symbols',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email',
                  },
                })}
                type='email'
                id='email'
                placeholder='email@mail.com'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
              />

              <div style={{ height: 20 }}>
                {errors?.email && <p className='error'>{errors?.email?.message?.toString()}</p>}
              </div>

              <input
                defaultValue='89095927614'
                {...register('password', {
                  required: 'You need write your password',
                  minLength: {
                    value: 8,
                    message:
                      'Password must have - minimum 8 symbols least one letter, one digit, one special character',
                  },
                  validate: {
                    checkLength: (value) => value.length >= 8,
                    matchPattern: (value) =>
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value),
                  },
                })}
                type='password'
                id='confirm_password'
                placeholder='**************'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
              />

              <div style={{ height: 20 }}>
                {errors?.password && (
                  <p className='error'>{errors?.password?.message?.toString()}</p>
                )}

                {errors.password?.type === 'matchPattern' && (
                  <p>
                    Password should contain at least one uppercase letter, lowercase letter, digit,
                    and special symbol.
                  </p>
                )}
              </div>
  
              <button className='button-hover mt-10 w-1/2 max-w-full justify-center rounded-full bg-mainblue p-3.5 text-white dark:bg-lightblue dark:text-darkblue'>
                Sign up
              </button>
            </form>
            ,
          </div>
        </div>
      </div>
    </div>
  )
}
