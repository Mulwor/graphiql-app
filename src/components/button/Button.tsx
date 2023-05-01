import './button.css'

type ButtonProps = {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className='button'>
      <a href='#'>{text}</a>
    </button>
  )
}
