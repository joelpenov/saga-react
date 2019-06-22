import actionTypes from "../actionTypes";
import { take, call, apply, put } from "redux-saga/effects";
import { getUserInfoSuccessAction } from "./userInfoActions";

export function* loadUserInfoSaga() {
  const { userId } = yield take(actionTypes.LOAD_USER_INFO);
  const userInfoResponse = yield call(
    fetch,
    `http://localhost:2014/user/${userId}`
  );
  const jsonData = yield apply(userInfoResponse, userInfoResponse.json);
  yield put(getUserInfoSuccessAction(jsonData));
}
