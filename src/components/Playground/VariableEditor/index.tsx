import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { langs } from '@uiw/codemirror-extensions-langs'
import { materialLight, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import cx from 'clsx'
import { memo } from 'react'

import { values } from '@/components/Playground'

type VariableEditorProps = {
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  className?: string
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
  return (
    <CodeMirror
      className={cx('h-full w-full', className)}
      height='100%'
      theme={materialLightInit({
        settings: {
          fontFamily: 'Fira Code',
          lineHighlight: '#FAFAFA',
        },
      })}
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      extensions={extensions}
    />
  )
})
