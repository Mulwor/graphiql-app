import { buildClientSchema } from 'graphql'

import { QueryEditor } from '@/components'
import { useGetSchemaQuery } from '@/store'

export const GraphiPage = () => {
  const { data, isFetching } = useGetSchemaQuery()

  if (isFetching) return <div>isFetching</div>

  return (
    <div className='h-full w-full'>
      <QueryEditor schema={data && buildClientSchema(data)} />
    </div>
  )
}
