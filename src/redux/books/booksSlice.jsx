import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../bookList';

const initialState = {
  bookItems: bookList,
};

const bookSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookItems.push(payload);
    },
    removeBook: (state, { payload }) => {
      state.bookItems = state.bookItems.filter((book) => book.id !== payload);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
