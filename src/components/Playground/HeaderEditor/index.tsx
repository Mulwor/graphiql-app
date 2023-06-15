import CodeMirror from '@uiw/react-codemirror'
import cx from 'clsx'
import { memo } from 'react'

import { extensions, material } from '@/components/Playground/lib'
import { values } from '@/components/Playground/signals'
import { useAppSelector } from '@/store'

type HeaderEditorProps = {
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  className?: string
}

const handleChange = (value: string) => {
  values.value.headers = value.trim()
}

export const HeaderEditor = memo(({ value, onKeyDown, className }: HeaderEditorProps) => {
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
