import { eventChannel } from "redux-saga";
import { take, put } from "redux-saga/effects";
import { updateEmployeeAvailabilityStatus } from "../employeeAvailability/employeeAvailabilityActions";

export function* updateEmployeeAvailabitySaga() {
  const socket = window.io("http://localhost:2015/");

  const availabilityChannel = new eventChannel(emitter => {
    const supportIsAvailable = () => {
      emitter(true);
    };

    const supportIsNotAvailable = () => {
      emitter(false);
    };

    socket.on("SUPPORT_AVAILABLE", supportIsAvailable);
    socket.on("SUPPORT_NOT_AVAILABLE", supportIsNotAvailable);

    return () => {};
  });

  while (true) {
    const supportIsAvailable = yield take(availabilityChannel);
    yield put(updateEmployeeAvailabilityStatus(supportIsAvailable));
  }
}
