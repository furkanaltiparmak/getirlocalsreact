import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
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

export const { getTags, getTypes, getBrands, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
