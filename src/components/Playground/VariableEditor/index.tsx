import CodeMirror from '@uiw/react-codemirror'
import cx from 'clsx'
import { memo } from 'react'

import { extensions, material } from '@/components/Playground/lib'
import { values } from '@/components/Playground/signals'
import { useAppSelector } from '@/store'

type VariableEditorProps = {
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  className?: string
}

const handleChange = (value: string) => {
  values.value.variables = value.trim()
}

export const VariableEditor = memo(({ value, onKeyDown, className }: VariableEditorProps) => {
  const isDark = useAppSelector((state) => state.setting.isDark)

  return (
    <CodeMirror
      className={cx('h-full w-full', className)}
      height='100%'
      theme={material(isDark ? 'dark' : 'light')}
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      extensions={extensions()}
    />
  )
})
