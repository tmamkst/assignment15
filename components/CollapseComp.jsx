import React, { useState } from "react";

const CollapseComp = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? "collapsed" : ""}`}>
      <div className="collapseHeader" onClick={toggleCollapse}>
        <h2>{title}</h2>
      </div>
      {isCollapsed && <div className="collapseContent">{content}</div>}
    </div>
  );
};

export default CollapseComp;
