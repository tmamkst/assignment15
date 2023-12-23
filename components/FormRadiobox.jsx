import React from "react";

const FormRadiobox = ({ label, value, checked, onChange }) => {
  return (
    <div className="formRadiobox">
      <label>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default FormRadiobox;
