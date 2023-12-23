import React from "react";

const TagsComp = ({ tags }) => {
  return (
    <div className="tagsss">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default TagsComp;
