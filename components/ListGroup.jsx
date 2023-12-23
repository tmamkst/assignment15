
import React from 'react';

const ListGroup = ({ items }) => {
  return (
    <ul className="listGroup">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
