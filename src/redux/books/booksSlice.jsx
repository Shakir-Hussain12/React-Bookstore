import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../bookList';

const initialState = {
  bookItems: bookList,
};

const bookSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state) => {
      state.books.push('New Book');
    },
    removeBook: (state) => {
      state.books.pop();
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
