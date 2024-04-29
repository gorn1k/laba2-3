// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002' }), // Замените на адрес вашего сервера
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/data', // Замените на '/data'
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
