import { langs } from '@uiw/codemirror-extensions-langs'
import { materialLight, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'

type ResponseProps = {
  value: string
}

export const Response = ({ value }: ResponseProps) => {
  return (
    <CodeMirror
      className='h-full w-full'
      height='100%'
      width='100%'
      theme={materialLight}
      readOnly
      value={value}
      extensions={[materialLightInit(), langs.json()]}
    />
  )
}
