import { ReactComponent as LogoIcon } from '@/assets/graphql.svg'

export const Logo = () => {
  return (
    <div className='flex items-center transition-all hover:fill-white hover:text-darknavy dark:hover:text-white'>
      <LogoIcon className='hover-svg h-14 w-14 fill-seagreen p-2.5' />
      <div className='py-2.5 uppercase hover:text-darknavy dark:hover:text-white'>GraphiQL</div>
    </div>
  )
}
