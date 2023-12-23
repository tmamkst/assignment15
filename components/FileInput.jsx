import React from "react";

const FileInput = ({ label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="fileInput" onChange={onChange} />
    </div>
  );
};

export default FileInput;
