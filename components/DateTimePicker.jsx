import React from "react";

const DateTimePicker = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="datetimeLocal" value={value} onChange={onChange} />
    </div>
  );
};

export default DateTimePicker;
