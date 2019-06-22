import actionTypes from "../actionTypes";

export const loadUserCartProductIdsSuccess = cartProductIds => {
  return { type: actionTypes.LOAD_CART_PRODUCTS_ID_SUCCESS, cartProductIds };
};

export const loadCartProductSuccess = product => {
  return { type: actionTypes.REQUEST_CART_PRODUCT_SUCCESS, product };
};

export const loadCartProduct = productId => {
  return { type: actionTypes.ADD_CART_PRODUCT, productId };
};

export const requestIncrementProductQuantity = productId => {
  return { type: actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY, productId };
};

export const requestDecrementProductQuantity = productId => {
  return { type: actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY, productId };
};

export const quantityRequestStatus = status => {
  return { type: status, status };
};

export const setProductPrice = (productId, price) => {
  return { type: actionTypes.SET_PRODUCT_PRICE, productId, price };
};
