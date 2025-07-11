import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',                     // keep name consistent
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',     // ends with ONE slash
  }),
  tagTypes: ['Books', 'BorrowSummary'],

  endpoints: (builder) => ({
    // GET /books
    getBooks: builder.query({
      query: () => 'books',
      providesTags: ['Books'],
    }),

    // POST /books
    addBook: builder.mutation({
      query: (body) => ({
        url: 'books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
    }),

    // PATCH /books/:id
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `books/${id}`,        // ← no leading slash
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),

    // DELETE /books/:id
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,        // ← no leading slash
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),

    // GET /borrow  (summary)
    getBorrowSummary: builder.query({
      query: () => 'borrow',
      providesTags: ['BorrowSummary'],
    }),

    // POST /borrow
    borrowBook: builder.mutation<
      { message: string },
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: 'borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books', 'BorrowSummary'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
} = booksApi;
