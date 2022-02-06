import createSagaMiddleware from "redux-saga";

import productReducer from "./slices/productSlice";
import rootSaga from "./sagas/productSaga";

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { productReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
