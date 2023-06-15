import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>
}
