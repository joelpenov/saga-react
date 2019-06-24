import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

export default function productQuantityFetchSatusReducer(
  state = initialState.fetchingRequest,
  action
) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST_DONE:
    case actionTypes.FETCHING_REQUEST: {
      return action.status;
    }
    default:
      return state;
  }
}
