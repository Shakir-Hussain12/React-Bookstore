import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
