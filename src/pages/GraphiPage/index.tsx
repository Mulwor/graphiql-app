import { EditorView } from '@codemirror/view'
import { buildClientSchema } from 'graphql'

import { QueryEditor, Response } from '@/components'
import { useGetSchemaQuery, useLazyGetDataQuery } from '@/store'

export const GraphiPage = () => {
  const { data: schema, isFetching } = useGetSchemaQuery()
  const [request, { data, error, isError }] = useLazyGetDataQuery()

  if (isFetching) return <div>isFetching</div>

  const handkeKeyDown = (target: EditorView) => {
    const value = target.state.doc.toJSON().join('')
    void request(value)
  }

  return (
    <div className='grid h-full w-full grid-cols-2 gap-1'>
      <QueryEditor
        schema={schema && buildClientSchema(schema)}
        onKeyDown={handkeKeyDown}
      />
      <Response value={JSON.stringify(isError ? error : data, null, 2)} />
    </div>
  )
}
