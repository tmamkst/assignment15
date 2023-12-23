import React from "react";

const GroupButtons = ({ buttons, onSelect }) => {
  return (
    <div className="groupButtons">
      {buttons.map((button) => (
        <button key={button.value} onClick={() => onSelect(button)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default GroupButtons;
