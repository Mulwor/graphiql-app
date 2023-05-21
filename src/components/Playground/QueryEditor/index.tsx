import { acceptCompletion, autocompletion } from '@codemirror/autocomplete'
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { useAppSelector } from '@root/src/store'
import { materialDarkInit, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { graphql } from 'cm6-graphql'
import { GraphQLSchema } from 'graphql'
import { memo } from 'react'

import { values } from '@/components/Playground'

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

const extensions = (schema?: GraphQLSchema) => [
  graphql(schema),
  autocompletion({
    activateOnTyping: true,
    icons: true,
  }),
  Prec.high(
    keymap.of([
      {
        key: 'Tab',
        run: acceptCompletion,
      },
      {
        key: 'Mod-Enter',
        run: () => true,
      },
    ]),
  ),
]

type QueryEditorProps = {
  schema?: GraphQLSchema
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

const handleChange = (value: string) => {
  values.value.document = value.trim()
}

export const QueryEditor = memo(({ schema, onKeyDown }: QueryEditorProps) => {
  const isDark = useAppSelector((state) => state.setting.isDark)

  return (
    <CodeMirror
      className='h-full'
      height='100%'
      theme={material(isDark ? 'dark' : 'light')}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      extensions={extensions(schema)}
    />
  )
})
