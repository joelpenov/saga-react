import React from "react";
import { connect } from "react-redux";

const ClientInfoComponent = ({ userInfo }) => {
  const { name, address1, phone } = userInfo;
  if (!name)
    return (
      <p>
        <small>Loading user info...</small>
      </p>
    );

  return (
    <>
      <h3>{name}</h3>
      <p>
        <br />
        <small>{address1}</small>
        <br />
        <small>{phone}</small>
      </p>
    </>
  );
};

const mapStateToProps = ({ userInfo }) => {
  return {
    userInfo
  };
};

export default connect(mapStateToProps)(ClientInfoComponent);
