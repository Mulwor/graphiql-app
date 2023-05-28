import { useRouteError } from 'react-router-dom'

export const ErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)

  return <div className='text-center'>Something went wrong...</div>
}
