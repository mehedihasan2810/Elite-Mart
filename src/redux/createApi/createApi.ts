import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (name) => `api/products/${name}`,
    }),
  }),
});

export const { useGetProductQuery } = dataApi;
