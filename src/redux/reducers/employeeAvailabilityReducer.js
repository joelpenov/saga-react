import initialState from "../initialState";
import actionTypes from "../actions/actionTypes";

export default function employeeAvailabilityReducer(
  state = initialState.employeeAvailability,
  action
) {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEE_AVAILABILITY:
      return action.newStatus;
    default:
      return state;
  }
}
