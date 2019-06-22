import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CART_PRODUCT_SUCCESS:
      return [...state, { ...action.product }];
    case actionTypes.SET_PRODUCT_PRICE: {
      const product = state.find(x => x.id === action.productId);
      const newProduct = { ...product, price: action.price };
      return [...state.filter(x => x.id !== action.productId), newProduct].sort(
        (a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        }
      );
    }
    default:
      return state;
  }
}
