import cx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={cx(className)}>{children}</button>
}

// type ButtonProps = {
//   text: string
//   classes: string
// }

// export const Button = ({ text, classes }: ButtonProps) => {
//   return (
//     <button className={classes}>
//       <a href='#'>{text}</a>
//     </button>
//   )
// }
