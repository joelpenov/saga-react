import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import productIdsReducer from "./productIdsReducer";
import productsReducer from "./productReducer";
import productQuantityFetchSatusReducer from "./productQuantityFetchStatusReducer";
import employeeAvailabilityReducer from "./employeeAvailabilityReducer";
import shippingReducer from "./shippingReducer";
import taxReducer from "./taxReducer";

const rootReducers = combineReducers({
  userInfo: userInfoReducer,
  cartProductIds: productIdsReducer,
  products: productsReducer,
  fetchingRequest: productQuantityFetchSatusReducer,
  employeeAvailability: employeeAvailabilityReducer,
  shipping: shippingReducer,
  tax: taxReducer
});

export default rootReducers;
