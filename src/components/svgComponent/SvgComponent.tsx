interface SVGProp {
  src: string
}

export const SVGComponent = ({ src }: SVGProp) => {
  return <img src={src} />
}
