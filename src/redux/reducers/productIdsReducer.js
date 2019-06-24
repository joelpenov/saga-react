import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

function sortProductsById(productIds) {
  return productIds.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
}

function modifyProductQuantity(productId, productIds, increment = false) {
  const productToIncrement = productIds.find(x => x.id === productId);
  const newState = productIds.filter(x => x.id !== productId);
  let newQuantity = increment
    ? productToIncrement.quantity + 1
    : productToIncrement.quantity - 1;

  let newProductIds = [
    ...newState,
    { ...productToIncrement, quantity: newQuantity }
  ];
  return sortProductsById(newProductIds);
}

export default function productIdsReducer(
  state = initialState.cartProductIds,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCTS_ID_SUCCESS:
      return action.cartProductIds.map(x => x);
    case actionTypes.REQUEST_INCREMENT_PRODUCT_QUANTITY:
      return modifyProductQuantity(action.productId, state, true);
    case actionTypes.REQUEST_DECREMENT_PRODUCT_QUANTITY:
      return modifyProductQuantity(action.productId, state);
    case actionTypes.SET_PRODUCT_PRICE: {
      const product = state.find(x => x.id === action.productId);
      const newProduct = { ...product, price: action.price };
      let newProductIds = [
        ...state.filter(x => x.id !== action.productId),
        newProduct
      ];
      return sortProductsById(newProductIds);
    }

    default:
      return state;
  }
}
