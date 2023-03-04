import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  underConstruction: false,
  hideButton: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.hideButton = true;
      state.underConstruction = true;
      state.categories.push('Under construction');
    },
    showButton: (state) => {
      state.hideButton = false;
      state.underConstruction = false;
      state.categories.pop('Under construction');
    },
  },
});

export const { checkStatus, showButton } = categoriesSlice.actions;
export default categoriesSlice.reducer;
