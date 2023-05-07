import { acceptCompletion, autocompletion } from '@codemirror/autocomplete'
import { Prec } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { materialLight, materialLightInit } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { graphql } from 'cm6-graphql'
import { GraphQLSchema } from 'graphql'

type QueryEditorProps = {
  schema?: GraphQLSchema
  onKeyDown?: (target: EditorView) => void
}

export const QueryEditor = ({ schema, onKeyDown }: QueryEditorProps) => {
  return (
    <CodeMirror
      className='h-full w-full'
      height='100%'
      width='100%'
      theme={materialLight}
      extensions={[
        materialLightInit(),
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
              run: (target) => {
                onKeyDown?.(target)
                return true
              },
            },
          ]),
        ),
      ]}
    />
  )
}
