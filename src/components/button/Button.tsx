type ButtonProps = {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <button className='text-3xl font-bold underline'>{text}</button>
}
