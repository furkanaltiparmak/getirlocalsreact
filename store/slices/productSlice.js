import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: { pages: 0, total_count: 0, products: [] },
  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsFetch: (state, { payload }) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    },
    getProductsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getProductsFetch, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;
