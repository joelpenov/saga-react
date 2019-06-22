import actionTypes from "../../actions/actionTypes";

export function getUserInfoAction(userId) {
  return { type: actionTypes.LOAD_USER_INFO, userId };
}

export function getUserInfoSuccessAction(userInfo) {
  return { type: actionTypes.LOAD_USER_INFO_SUCCESS, userInfo };
}
