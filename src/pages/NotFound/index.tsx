import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1 className='title'>404</h1>
      <p className='info'>
        This page doesn&lsquo;t exist. Go <Link to='/'>Home</Link>
      </p>
    </div>
  )
}
