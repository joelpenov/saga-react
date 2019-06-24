import actionTypes from "../actionTypes";

export const updateEmployeeAvailabilityStatus = newStatus => {
  return { type: actionTypes.SET_EMPLOYEE_AVAILABILITY, newStatus };
};
