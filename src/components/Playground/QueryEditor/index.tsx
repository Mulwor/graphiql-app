import { acceptCompletion, autocompletion } from '@codemirror/autocomplete'
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { graphql } from 'cm6-graphql'
import { GraphQLSchema } from 'graphql'
import { memo } from 'react'

import { values } from '@/components/Playground'

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
  return (
    <CodeMirror
      className='h-full'
      height='100%'
      theme={materialLightInit({
        settings: {
          fontFamily: 'Fira Code',
          lineHighlight: '#FAFAFA',
        },
      })}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      extensions={extensions(schema)}
    />
  )
})
