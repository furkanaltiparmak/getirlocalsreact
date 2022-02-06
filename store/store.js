//Modules
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
//Store Reducers
import productReducer from "./slices/productSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
//Sagas
import rootSaga from "./sagas/productSaga";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { productReducer, filterReducer, cartReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
