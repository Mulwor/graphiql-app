import CodeMirror from '@uiw/react-codemirror'
import { memo } from 'react'

import { extensions, material } from '@/components/Playground/lib'
import { useAppSelector } from '@/store'

type ResponseEditorProps = {
  value: string
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
      extensions={extensions()}
    />
  )
})
