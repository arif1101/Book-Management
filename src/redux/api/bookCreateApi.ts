import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const booksApi =  createApi({
    reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "books",
            providesTags: ['Books']
        }),
        addBook: builder.mutation({
            query:(body)=> ({
                url: "books",
                method: "POST",
                body
            }),
            invalidatesTags: ["Books"]
        })
    })
})

export const { useGetBooksQuery, useAddBookMutation } = booksApi;