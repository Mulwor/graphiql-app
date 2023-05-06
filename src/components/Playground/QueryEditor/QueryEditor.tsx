import { acceptCompletion, autocompletion } from '@codemirror/autocomplete'
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import {
  materialDark,
  materialDarkInit,
  materialLight,
  materialLightInit,
} from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { graphql } from 'cm6-graphql'
import { GraphQLSchema } from 'graphql'

type QueryEditorProps = {
  schema?: GraphQLSchema
}

export const QueryEditor = ({ schema }: QueryEditorProps) => {
  return (
    <CodeMirror
      className='h-full w-full'
      height='100%'
      width='100%'
      theme={materialLight}
      basicSetup={{
        autocompletion: true,
        lineNumbers: true,
        bracketMatching: true,
        closeBrackets: true,
        history: true,
        syntaxHighlighting: true,
      }}
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
          ]),
        ),
      ]}
    />
  )
}
