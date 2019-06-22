import initialState from "../initialState";
import actionTypes from "../actions/actionTypes";

export default function userInfoReducer(state = initialState.userInfo, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER_INFO_SUCCESS: {
      return action.userInfo;
    }
    default:
      return state;
  }
}
