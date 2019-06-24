import actionTypes from "../actionTypes";

export const setShipping = shipping => {
  return { type: actionTypes.SET_SHIPPING, shipping };
};
