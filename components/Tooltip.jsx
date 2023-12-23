import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltipContainer">
      {children}
      <div className="tooltip">{text}</div>
    </div>
  );
};

export default Tooltip;
