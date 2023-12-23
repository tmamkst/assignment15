import React from "react";

const SliderComp = ({ value, onChange }) => {
  return (
    <div className="slider">
      <input type="range" value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

export default SliderComp;
