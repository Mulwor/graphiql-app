import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql'
import { gql } from 'graphql-request'

type GetData = {
  document?: string
  variables?: Record<string, unknown>
  headers?: Record<string, string>
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: ({ query }) => ({
    getSchema: query<IntrospectionQuery, void>({
      query: () => ({
        url: '/',
        method: 'POST',
        body: {
          query: getIntrospectionQuery(),
        },
      }),
      transformResponse: ({ data }: { data: IntrospectionQuery }) => {
        return data
      },
    }),
    getData: query<Record<string, unknown>, GetData>({
      query: ({ document, headers, variables }) => ({
        url: '/',
        method: 'POST',
        body: {
          query: gql`
            ${document}
          `,
          variables,
        },
        headers,
      }),
    }),
  }),
})

export const { useGetSchemaQuery, useLazyGetDataQuery } = api
