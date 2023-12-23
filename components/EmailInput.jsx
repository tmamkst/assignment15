import React from "react";

const EmailInput = ({ label, value, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
