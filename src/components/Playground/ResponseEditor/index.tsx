import { langs } from '@uiw/codemirror-extensions-langs'
import { materialLight, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { memo } from 'react'

type ResponseEditorProps = {
  value: string
}

export const ResponseEditor = memo(({ value }: ResponseEditorProps) => {
  return (
    <CodeMirror
      className='h-full w-full border'
      height='100%'
      theme={materialLight}
      readOnly
      value={value}
      extensions={[materialLightInit(), langs.json()]}
    />
  )
})
