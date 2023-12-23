import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="pageHeader">
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
