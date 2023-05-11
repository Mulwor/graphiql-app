import { auth, logInWithEmailAndPassword } from '@root/src/firebase.config'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as AuthImage } from '@/assets/auth.svg'

export const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate('/')
  }, [user, loading, navigate])

  return (
    <>
      <div className='flex h-full w-full max-w-7xl grow items-start justify-center gap-7 '>
        <div className='flex h-full max-w-full shrink grow basis-0.5'>
          <AuthImage />
        </div>
        <div className='mt-10 flex w-full shrink grow basis-0.5 flex-col'>
          <h2 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h2>
          <div className='text-2xl'>Sign in</div>

          <div className='mt-10'>
            <div className='flex flex-col'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                id='email'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
                placeholder='johnIsFigos@company.com'
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                id='confirm_password'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
                placeholder='•••••••••'
                required
              />

              <button
                className='button-hover mt-10 w-1/3 max-w-full justify-center rounded-full bg-mainblue p-3.5 text-white dark:bg-lightblue dark:text-darkblue'
                onClick={() => void logInWithEmailAndPassword(email, password)}
              >
                Sign in grapiQL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
