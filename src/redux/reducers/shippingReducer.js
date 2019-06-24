import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const shippingReducer = (state = initialState.shipping, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING:
      return action.shipping;
    default:
      return state;
  }
};

export default shippingReducer;
