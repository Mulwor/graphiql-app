import { acceptCompletion, autocompletion } from '@codemirror/autocomplete'
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { langs } from '@uiw/codemirror-extensions-langs'
import { graphql } from 'cm6-graphql'
import { GraphQLSchema } from 'graphql'

export const extensions = (schema?: GraphQLSchema) => {
  return [
    schema ? graphql(schema) : langs.json(),
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
}
