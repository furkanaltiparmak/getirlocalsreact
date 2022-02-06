import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  companies: [],
  tags: [],
  types: [],
  brands: [],
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
    getCompanies: (state, { payload }) => {
      state.companies = payload;
    },
    getTags: (state, { payload }) => {
      state.tags = payload;
    },
    getTypes: (state, { payload }) => {
      state.types = payload;
    },
    getBrands: (state, { payload }) => {
      state.brands = payload;
    },
  },
});

export const {
  getProductsFetch,
  getProductsSuccess,
  getProductsFailure,
  getCompanies,
  getTags,
  getTypes,
  getBrands,
} = productSlice.actions;

export default productSlice.reducer;
