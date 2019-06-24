import initialState from "../initialState";
import actionTypes from "../actions/actionTypes";

export default function employeeAvailabilityReducer(
  state = initialState.employeeAvailability,
  action
) {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEE_AVAILABILITY:
      console.log("New reducer status: " + action.newStatus);
      return action.newStatus;
    default:
      return state;
  }
}
