import React from "react";

const ListComp = ({ items }) => {
  return (
    <ul className="customList">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComp;
