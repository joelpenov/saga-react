import actionTypes from "../actionTypes";

export const updateEmployeeAvailabilityStatus = newStatus => {
  console.log("New action status: " + newStatus);
  return { type: actionTypes.SET_EMPLOYEE_AVAILABILITY, newStatus };
};
