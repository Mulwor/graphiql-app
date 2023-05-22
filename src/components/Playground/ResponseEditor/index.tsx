import { useAppSelector } from '@root/src/store'
import { langs } from '@uiw/codemirror-extensions-langs'
import { materialDarkInit, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { memo } from 'react'

type ResponseEditorProps = {
  value: string
}

const material = (theme: 'light' | 'dark') => {
  const options = {
    settings: {
      fontFamily: 'Fira Code',
      lineHighlight: theme === 'light' ? '#FAFAFA' : '#00324B',
      background: theme === 'light' ? '#FAFAFA' : '#00324B',
      gutterBackground: theme === 'light' ? '#FAFAFA' : '#00324B',
    },
  }

  return theme === 'light' ? materialLightInit(options) : materialDarkInit(options)
}

export const ResponseEditor = memo(({ value }: ResponseEditorProps) => {
  const isDark = useAppSelector((state) => state.setting.isDark)

  return (
    <CodeMirror
      className='h-full w-full'
      height='100%'
      theme={material(isDark ? 'dark' : 'light')}
      readOnly
      value={value}
      extensions={[langs.json()]}
    />
  )
})
