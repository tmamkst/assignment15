import React, { useState } from "react";

const AccordionComp = ({ sectionTitle, sectionContent }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const toggleAccordionSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <div className={`accordion ${isSectionOpen ? "expanded" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordionSection}>
        <h2>
          {sectionTitle}
          <span className={`arrow ${isSectionOpen ? "open" : ""}`}>
            &#9650;
          </span>
        </h2>
      </div>
      {isSectionOpen && (
        <div
          className="accordion-content"
          style={{ transition: "height 0.5s ease" }}
        >
          {sectionContent}
        </div>
      )}
    </div>
  );
};

export default AccordionComp;
