interface SVGProp {
  src: string
  classes: string
}

export const SVGComponent = ({ src, classes }: SVGProp) => {
  return (
    <img
      className={classes}
      src={src}
    />
  )
}
