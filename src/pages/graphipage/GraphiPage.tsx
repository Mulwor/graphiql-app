import { buildClientSchema, printSchema } from 'graphql'

import { useGetSchemaQuery } from '@/store'

export const GraphiPage = () => {
  const { data, isFetching } = useGetSchemaQuery({})

  if (isFetching) return <div>isFetching</div>

  console.log(data && printSchema(buildClientSchema(data)))

  return <div>Graphi Hello</div>
}
