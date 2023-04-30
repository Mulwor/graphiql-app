import { FC } from 'react'

interface SVGProp {
  src: string
}

export const SVGComponent: FC<SVGProp> = ({ src }) => {
  return <img src={src} />
}
