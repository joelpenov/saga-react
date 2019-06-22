import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

export default function productQuantityFetchSatusReducer(
  state = initialState.fetchQuantityStatus,
  action
) {
  switch (action.type) {
    case actionTypes.PRODUCT_QUANTITY_FETCH_DONE:
    case actionTypes.FETCHING_PRODUCT_QUANTITY: {
      return action.status;
    }
    default:
      return state;
  }
}
