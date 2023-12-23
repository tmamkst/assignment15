import React, { useState } from "react";

const Drawers = ({ items }) => {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const handleDrawerClick = (drawer) => {
    setActiveDrawer(activeDrawer === drawer ? null : drawer);
  };

  return (
    <div className="drawers">
      {items.map((item, index) => (
        <div
          key={index}
          className={`drawer ${activeDrawer === index ? "active" : ""}`}
        >
          <div
            className="drawerHeader"
            onClick={() => handleDrawerClick(index)}
          >
            {item.title}
          </div>
          <div className="drawerContent">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Drawers;
