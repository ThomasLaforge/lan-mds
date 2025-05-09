import React from "react";
import "./IconText.scss";

export interface IconTextProps {
  Icon: React.FC;
  label: string;
}

function IconText({ Icon, label }: IconTextProps) {
  return (
    <div className="iconTextContainer">
      <Icon />
      <span>{label}</span>
    </div>
  );
}

export default IconText;
