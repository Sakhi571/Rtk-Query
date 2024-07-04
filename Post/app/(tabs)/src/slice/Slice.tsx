import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Slice = createApi({
    reducerPath: 'Slice',
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com"}),
    endpoints: (builder)=>({
        addPost : builder.mutation({
            query:  data => ({
                url:"products",
                method:"POST",
                body: data,
            }),
        }),
    }),
});
export const { useAddPostMutation} = Slice;