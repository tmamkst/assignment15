import React from "react";

const FormToggle = ({ label, checked, onChange }) => {
  return (
    <div className="formToggle">
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default FormToggle;
