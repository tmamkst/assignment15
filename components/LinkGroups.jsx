import React from "react";

const LinkGroups = ({ groups }) => {
  return (
    <div className="linkGroups">
      {groups.map((group, index) => (
        <div key={index} className="linkGroup">
          <h3>{group.title}</h3>
          <ul>
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LinkGroups;
