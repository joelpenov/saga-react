import { takeLatest, put, select, call, apply } from "redux-saga/effects";
import { setShipping } from "../shipping/shippingActions";
import { requestStatus } from "../product/productActions";
import actionTypes from "../actionTypes";

function* processShippingUpdate() {
  yield put(requestStatus(actionTypes.FETCHING_REQUEST));
  const productIds = yield select(state => state.cartProductIds);
  const lastIndex = productIds.length - 1;
  let productIdsString = productIds.reduce(
    (currentResult, { id, quantity }, currentIndex) => {
      let tempResult = "";
      for (let i = 0; i < quantity; i++) tempResult += `${id},`;

      if (currentIndex === lastIndex) {
        tempResult = tempResult.substring(0, tempResult.length - 1);
      }

      return currentResult + tempResult;
    },
    ""
  );

  const shippingRespong = yield call(
    fetch,
    `http://localhost:2014/shipping/${productIdsString}`
  );
  const { total: shipping } = yield apply(
    shippingRespong,
    shippingRespong.json
  );
  yield put(setShipping(shipping));
  yield put(requestStatus(actionTypes.FETCH_REQUEST_DONE));
}

export function* updateShipment() {
  yield takeLatest(
    [
      actionTypes.SET_PRODUCT_PRICE,
      actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY,
      actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY
    ],
    processShippingUpdate
  );
}
