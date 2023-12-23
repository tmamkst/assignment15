import React from "react";

const Label = ({ text, badge }) => {
  return (
    <div className="label">
      {text}
      {badge && <span className="badge">{badge}</span>}
    </div>
  );
};

export default Label;
