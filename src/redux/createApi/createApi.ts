import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://elite-mart.vercel.app",
  }),

  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id: string) => `api/products/${id}`,
    }),

    getCartProducts: builder.query({
      query: (ids: string[] | null) => `/api/cart?ids=${ids?.join(",")}`,
    }),
  }),
});

export const { useGetProductQuery, useGetCartProductsQuery } = dataApi;
