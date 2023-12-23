import React from "react";

const Textarea = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Textarea;
