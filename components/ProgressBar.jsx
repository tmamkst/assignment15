import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="progressBar">
      <div style={{ width: `${value}%` }} className="progressBarFill"></div>
    </div>
  );
};

export default ProgressBar;
