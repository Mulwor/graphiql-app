import { ReactComponent as LogoIcon } from '@/assets/logo.svg'

export const Logo = () => {
  return (
    <div className='flex items-center rounded-lg transition-all hover:bg-white hover:fill-darknavy hover:text-darknavy dark:hover:fill-white dark:hover:text-white'>
      <LogoIcon className='hover-svg w-38 h-16 fill-seagreen' />
    </div>
  )
}
