import React from "react";

const SidebarMenu = ({ items }) => {
  return (
    <aside className="sidebarMenu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarMenu;
