import React from "react";

const NavigationLinks = ({ links }) => {
  return (
    <nav className="navigationLinks">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
