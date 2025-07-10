import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from './api/bookCreateApi'
// ...

export const store = configureStore({
  reducer: {
    // books: bookReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(booksApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store