import { useRouteError } from 'react-router-dom'

export const ErrorBoundary = () => {
  const error = useRouteError()

  return <div className='text-center'>Something went wrong... {JSON.stringify(error)}</div>
}
