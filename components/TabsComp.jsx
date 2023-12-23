import React, { useState } from "react";

const TabsComp = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="tabs">
      <div className="tabButtons">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={tab.label === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabContent">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsComp;
