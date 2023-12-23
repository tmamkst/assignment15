import React from "react";

const AlertComp = ({ type, text }) => {
  return <div className={`alert ${type}`}>{text}</div>;
};

export default AlertComp;
