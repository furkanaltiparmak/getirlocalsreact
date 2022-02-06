import createSagaMiddleware from "redux-saga";

import productReducer from "./slices/productSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import rootSaga from "./sagas/productSaga";

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { productReducer, filterReducer, cartReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
