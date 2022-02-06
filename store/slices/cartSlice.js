//Modules
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      var index = state.cart.findIndex((item) => item.slug === payload.slug);
      if (index != -1) {
        state.cart[index].amount++;
        state.cart = [...state.cart];
      } else {
        state.cart = [...state.cart, payload];
      }
    },
    removeProduct: (state, { payload }) => {
      var index = state.cart.findIndex((item) => item.slug === payload);
      if (index != -1) {
        if (state.cart[index].amount === 1) {
          state.cart = state.cart.filter((item) => item.slug != payload);
        } else {
          state.cart[index].amount--;
          state.cart = [...state.cart];
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
