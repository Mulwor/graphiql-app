import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql'
import { gql } from 'graphql-request'

type GetData = {
  document?: string
  variables?: Record<string, unknown>
  headers?: Record<string, unknown>
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: ({ query }) => ({
    getSchema: query<IntrospectionQuery, void>({
      query: () => ({
        document: getIntrospectionQuery(),
      }),
    }),
    getData: query<Record<string, unknown>, GetData>({
      query: ({ document, variables, headers }) => ({
        document: gql`
          ${document}
        `,
        variables,
        headers,
      }),
      transformErrorResponse(_, meta: { response: { errors: Record<string, unknown> } }) {
        return { errors: meta.response.errors }
      },
    }),
  }),
})

export const { useGetSchemaQuery, useLazyGetDataQuery } = api
