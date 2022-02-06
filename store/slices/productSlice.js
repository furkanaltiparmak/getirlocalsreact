import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: { pages: 0, total_count: 0, products: [] },
  filters: {
    sort: { sortBy: "asc", key: "price" },
    brand: "",
    tags: "",
    type: "",
    page: 1,
  },
  tags: [],
  types: [],
  brands: [],
  cart: [],
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
    getTags: (state, { payload }) => {
      state.tags = payload;
    },
    getTypes: (state, { payload }) => {
      state.types = payload;
    },
    getBrands: (state, { payload }) => {
      state.brands = payload;
    },
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const {
  getProductsFetch,
  getProductsSuccess,
  getProductsFailure,
  getTags,
  getTypes,
  getBrands,
  setFilters,
} = productSlice.actions;

export default productSlice.reducer;
