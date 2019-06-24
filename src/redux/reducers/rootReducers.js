import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import productIdsReducer from "./productIdsReducer";
import productsReducer from "./productReducer";
import productQuantityFetchSatusReducer from "./productQuantityFetchStatusReducer";
import employeeAvailabilityReducer from "./employeeAvailabilityReducer";

const rootReducers = combineReducers({
  userInfo: userInfoReducer,
  cartProductIds: productIdsReducer,
  products: productsReducer,
  fetchQuantityStatus: productQuantityFetchSatusReducer,
  employeeAvailability: employeeAvailabilityReducer
});

export default rootReducers;
