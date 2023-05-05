import { buildClientSchema, printSchema } from 'graphql'

import { useGetSchemaQuery } from '@/store'

export const GraphiPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isFetching } = useGetSchemaQuery({})

  if (isFetching) return <div>isFetching</div>

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  console.log(data && printSchema(buildClientSchema(data)))

  return <div>Graphi Hello</div>
}
