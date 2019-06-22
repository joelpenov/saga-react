import initialState from "../initialState";
import actionTypes from "../actions/actionTypes";

export default function cartReducer(state = initialState.products, action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCTS_SUCCESS:
      return action.cartProducts.map(p => p);
    default:
      return state;
  }
}
