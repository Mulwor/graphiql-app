export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='flex uppercase'>
        <li className='mr-5 hover:border-hoverblue hover:text-hoverblue'>
          <a
            className='pb-2.5 hover:border-b-2'
            href='#'
          >
            home
          </a>
        </li>
        <li className='mr-5 hover:border-hoverblue hover:text-hoverblue'>
          <a
            className='pb-2.5 hover:border-b-2'
            href='#'
          >
            sign in/sign up
          </a>
        </li>
        <li className='hover:border-hoverblue hover:text-hoverblue'>
          <a
            className='pb-2.5 hover:border-b-2'
            href='#'
          >
            graphiql
          </a>
        </li>
      </ul>
    </nav>
  )
}
