import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { langs } from '@uiw/codemirror-extensions-langs'
import { materialLight, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import cx from 'clsx'
import { memo } from 'react'

import { values } from '@/components/Playground'

type HeaderEditorProps = {
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  className?: string
}

const extensions = [
  materialLightInit({
    settings: {
      fontFamily: 'Fira Code',
    },
  }),
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
  values.value.headers = value.trim()
}

export const HeaderEditor = memo(({ value, onKeyDown, className }: HeaderEditorProps) => {
  return (
    <CodeMirror
      className={cx('h-full w-full border', className)}
      height='100%'
      theme={materialLight}
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      extensions={extensions}
    />
  )
})
