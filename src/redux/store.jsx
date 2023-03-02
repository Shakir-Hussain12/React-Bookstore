import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/books/booksSlice';
import categoriesReducer from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
