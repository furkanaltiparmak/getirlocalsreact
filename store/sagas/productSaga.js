import { call, takeEvery, put, throttle } from "redux-saga/effects";
import Axios from "axios";
import {
  getProductsFetch,
  getProductsSuccess,
  getProductsFailure,
} from "../slices/productSlice";
import { api } from "../../services/api";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* workGetProductsFetch(action) {
  try {
    let products = yield call(() =>
      callAPI({ url: api.getProducts(action.payload) })
    );
    yield call(delay, 3000);
    yield put(getProductsSuccess(products.data));
  } catch (e) {
    yield put(getProductsFailure());
  }
}

export default function* rootSaga() {
  yield throttle(3000, "products/getProductsFetch", workGetProductsFetch);
}
