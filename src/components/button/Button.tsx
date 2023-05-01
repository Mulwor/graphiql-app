type ButtonProps = {
  text: string
  classes: string
}

export const Button = ({ text, classes }: ButtonProps) => {
  return (
    <button className={classes}>
      <a href='#'>{text}</a>
    </button>
  )
}
