import React from "react";
import SpinnerComponent from "./spinner/SpinnerComponent";

const ClientInfoCompoent = ({ clientInfo }) => {
  if (!clientInfo)
    return (
      <p>
        <small>Loading user info...</small>
      </p>
    );

  return (
    <p>
      <small>Info a</small>
      <br />
      <small>Info a</small>
    </p>
  );
};

export default ClientInfoCompoent;
