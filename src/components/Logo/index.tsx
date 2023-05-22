import { ReactComponent as LogoIcon } from '@/assets/graphql.svg'

export const Logo = () => {
  return (
    <div className='flex items-center transition-all hover:fill-darknavy hover:text-darknavy dark:hover:fill-white dark:hover:text-white'>
      <LogoIcon className='hover-svg h-14 w-14 fill-seagreen py-2.5' />
      <div className='-ml-2 py-2.5 text-lg uppercase'>GraphiQL</div>
    </div>
  )
}
