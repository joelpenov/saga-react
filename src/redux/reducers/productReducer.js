import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CART_PRODUCT_SUCCESS:
      return [...state, { ...action.product }];
    default:
      return state;
  }
}
