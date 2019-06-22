import actionTypes from "../actionTypes";

export function loadUserCartProducts(cartProducts) {
  return {
    type: actionTypes.ADD_CART_PRODUCTS_SUCCESS,
    cartProducts
  };
}
