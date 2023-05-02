import cx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={cx(className)}>{children}</button>
}
