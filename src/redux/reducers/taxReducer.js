import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const taxReducer = (state = initialState.tax, action) => {
  switch (action.type) {
    case actionTypes.SET_TAX:
      return action.tax;
    default:
      return state;
  }
};

export default taxReducer;
