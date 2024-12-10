import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust base URL to your API
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => 'collections', // Endpoint for fetching collections
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionApi;