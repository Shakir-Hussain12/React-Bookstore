import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const appID = 'mNv8NqsrFRD2VZ1voP7H';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  bookItems: [],
};

export const getBookItems = createAsyncThunk('books/getBookItems', () => fetch(`${baseURL}/apps/${appID}/books`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((res) => res.json())
  .catch((err) => err));

export const setBookItem = createAsyncThunk('books/setBookItem', (...book) => {
  const {
    title, author, category,
  } = book[0];

  return (
    fetch(`${baseURL}/apps/${appID}/books`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: uuidv4(),
        title,
        author,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
      .catch((err) => err));
});

export const delBookItem = createAsyncThunk('books/deleteBookItem', (id) => fetch(`${baseURL}/apps/${appID}/books/${id}`, {
  method: 'DELETE',
  body: JSON.stringify({
    key: id,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((res) => res.json())
  .catch((err) => err));

const bookSlice = createSlice({
  name: 'books',
  initialState,
  loading: false,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookItems = [...state.bookItems, payload];
    },
    removeBook: (state, { payload }) => {
      state.bookItems = state.bookItems.filter((book) => book.id !== payload);
    },
  },
  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.loading = false;
    },
    [getBookItems.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.bookItems = payload;
    },
    [setBookItem.fulfilled]: (state) => {
      state.loading = false;
    },
    [delBookItem.fulfilled]: (state) => {
      state.loading = false;
    },
    [getBookItems.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
