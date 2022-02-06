//Modules
import { call, takeEvery, put, throttle } from "redux-saga/effects";
import Axios from "axios";
//Store Actions
import { getProductsSuccess, getProductsFailure } from "../slices/productSlice";
//Api
import { api } from "../../services/api";

let callAPI = async ({ url }) => {
  return await Axios({
    url,
  });
};

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* workGetProductsFetch(action) {
  try {
    yield call(delay, 3000);
    let products = yield call(() =>
      callAPI({ url: api.getProducts(action.payload) })
    );

    yield put(
      getProductsSuccess({
        products: products.data,
        pages: Math.ceil(products.headers["x-total-count"] / 16),
        total_count: Number(products.headers["x-total-count"]),
      })
    );
  } catch (e) {
    yield put(getProductsFailure());
  }
}

export default function* rootSaga() {
  yield takeEvery("products/getProductsFetch", workGetProductsFetch);
}
