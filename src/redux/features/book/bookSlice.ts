import { createSlice } from "@reduxjs/toolkit";
import type { IBook } from "../../../types";
import { bookData } from "../../../bookData";
import type { RootState } from "../../store";


interface initialState {
    books: IBook[];
}

const initialState = {
    books: bookData
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},

});

export const allBooks = (state: RootState) => {
    return state.books.books;
}

export default bookSlice.reducer;