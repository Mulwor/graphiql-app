import CodeMirror from '@uiw/react-codemirror'
import { GraphQLSchema } from 'graphql'
import { memo } from 'react'

import { extensions, material } from '@/components/Playground/lib'
import { values } from '@/components/Playground/signals'
import { useAppSelector } from '@/store'

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
