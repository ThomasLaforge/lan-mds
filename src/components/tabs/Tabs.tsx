"use client";
import "./Tabs.scss";

import React, { useState } from "react";

export interface TabItem {
  label: string;
  content: React.FC;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabIndex?: number;
}

export default function Tabs({
  items,
  defaultTabIndex = 0
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabIndex);

  const Child = items[activeTab].content;
  return (
    <div className="tabs">
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <Child />
      </div>
    </div>
  );
}
