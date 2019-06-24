import actionTypes from "../actionTypes";
import {
  take,
  call,
  apply,
  put,
  fork,
  all,
  select,
  takeLatest
} from "redux-saga/effects";
import {
  loadUserCartProductIdsSuccess,
  loadCartProduct,
  loadCartProductSuccess,
  requestStatus,
  setProductPrice
} from "../product/productActions";

export function* loadProduct({ id }) {
  const productUrl = `http://localhost:2014/items/${id}`;
  const response = yield call(fetch, productUrl);
  const productObject = yield response.json();
  yield put(loadCartProductSuccess(productObject[0]));
}

export function* loadProductsFromIdSaga() {
  const { cartProductIds } = yield take(
    actionTypes.LOAD_CART_PRODUCTS_ID_SUCCESS
  );
  yield all(cartProductIds.map(x => fork(loadProduct, x)));
}

export function* loadCartProductsIdSaga() {
  const { userId } = yield take(actionTypes.LOAD_USER_INFO);
  const response = yield call(fetch, `http://localhost:2014/cart/${userId}`);
  const { items: cartProductIds } = yield apply(response, response.json);
  yield put(loadUserCartProductIdsSuccess(cartProductIds));

  yield cartProductIds.map(cartProductId =>
    put(loadCartProduct(cartProductId.id))
  );
}

export function* requestIncrementProductQuantitySaga({
  type,
  productId,
  local
}) {
  if (type !== actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY || local === true)
    return;
  const { id } = yield select(state => state.userInfo);
  yield put(requestStatus(actionTypes.FETCHING_REQUEST));
  const response = yield call(
    fetch,
    `http://localhost:2014/cart/add/${id}/${productId}`
  );

  if (response.status !== 200) {
    yield put({
      type: actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY,
      productId,
      local: true
    });
  }

  yield put(requestStatus(actionTypes.FETCH_REQUEST_DONE));
}

export function* requestDecrementProductQuantitySaga({
  type,
  productId,
  local
}) {
  if (type !== actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY || local === true)
    return;
  const { id } = yield select(state => state.userInfo);
  yield put(requestStatus(actionTypes.FETCHING_REQUEST));
  const response = yield call(
    fetch,
    `http://localhost:2014/cart/remove/${id}/${productId}`
  );

  if (response.status !== 200) {
    yield put({
      type: actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY,
      productId,
      local: true
    });
  }

  yield put(requestStatus(actionTypes.FETCH_REQUEST_DONE));
}

export function* requestProductQuantitySaga() {
  yield all([
    takeLatest(
      actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY,
      requestIncrementProductQuantitySaga
    ),
    takeLatest(
      actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY,
      requestDecrementProductQuantitySaga
    )
  ]);
}

export function* loadItemPrice(productId, currency) {
  const response = yield call(
    fetch,
    `http://localhost:2014/prices/${currency}/${productId}`
  );
  const result = yield apply(response, response.json);
  yield put(setProductPrice(productId, result[0].price));
}

export function* setItemsPriceSaga() {
  const [{ userInfo }, { cartProductIds }] = yield all([
    take(actionTypes.LOAD_USER_INFO_SUCCESS),
    take(actionTypes.LOAD_CART_PRODUCTS_ID_SUCCESS)
  ]);

  yield all(
    cartProductIds.map(pId => call(loadItemPrice, pId.id, userInfo.country))
  );
}
