import actionTypes from "../actionTypes";

export function setUserTax(tax) {
  return { type: actionTypes.SET_TAX, tax };
}
