import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: ({ query }) => ({
    getSchema: query({
      query: () => ({
        url: '/',
        method: 'POST',
        body: {
          query: getIntrospectionQuery(),
        },
      }),
      transformResponse: (response: { data: IntrospectionQuery }) => {
        return response.data
      },
    }),
  }),
})

export const { useGetSchemaQuery } = api
