import actionTypes from "../actionTypes";
import { take, call, apply, put } from "redux-saga/effects";
import { setUserTax } from "./taxActions";

export function* setTaxSaga() {
  const { userInfo } = yield take(actionTypes.LOAD_USER_INFO_SUCCESS);
  const { country: userCountry } = userInfo;
  const taxResponse = yield call(
    fetch,
    `http://localhost:2014/tax/${userCountry}`
  );
  const { rate } = yield apply(taxResponse, taxResponse.json);
  yield put(setUserTax(rate));
}
