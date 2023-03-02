import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  underConstruction: true,
};

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.underConstruction = false;
      state.categories.push('Under construction');
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
