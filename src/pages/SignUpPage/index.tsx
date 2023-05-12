import { auth, registerWithEmailAndPassword } from '@root/src/firebase.config'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as AuthImage } from '@/assets/auth.svg'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, loading] = useAuthState(auth)
  const history = useNavigate()

  const register = () => {
    void registerWithEmailAndPassword(name, email, password)
  }

  useEffect(() => {
    if (loading) return
    if (user) history('/')
  }, [user, loading, history])

  return (
    <div className='mx-auto flex max-w-7xl shrink grow flex-col-reverse gap-7 sm:columns-2 sm:flex-row'>
      <div className='mx-auto w-full max-w-md shrink grow lg:self-center'>
        <AuthImage />
      </div>
      <div className='mx-auto w-full max-w-lg px-5 sm:flex sm:flex-col sm:p-0 lg:mt-[10%]'>
        <h2 className='text-4xl font-bold uppercase text-mainred'>GraphiQL</h2>
        <div className='text-2xl'>Sign up</div>

        <div className='mt-10'>
          <div className='flex flex-col'>
            <input
              type='text'
              className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
            />
            <input
              type='text'
              className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
              placeholder='johnIsFigos@company.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='button-hover mt-10 w-full max-w-full justify-center rounded-full bg-mainblue p-1.5 text-white dark:bg-lightblue dark:text-darkblue md:w-1/2'
              onClick={register}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
