import { createSlice } from '@reduxjs/toolkit';
import slice from '../../slice';

const initialState = {
  bookItems: slice,
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
