import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { useAppSelector } from '@root/src/store'
import { langs } from '@uiw/codemirror-extensions-langs'
import { materialDarkInit, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import cx from 'clsx'
import { memo } from 'react'

import { values } from '@/components/Playground'

type VariableEditorProps = {
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  className?: string
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

const extensions = [
  langs.json(),
  Prec.high(
    keymap.of([
      {
        key: 'Mod-Enter',
        run: () => true,
      },
    ]),
  ),
]

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
      extensions={extensions}
    />
  )
})
