import React from "react";

const BreadcrumbComp = ({ items }) => {
  return (
    <nav className="breadcomp">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadcrumbComp;
