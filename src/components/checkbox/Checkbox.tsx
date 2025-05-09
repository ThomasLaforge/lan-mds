import React from "react";
import "./Checkbox.scss"; // Fichier CSS pour le style (optionnel)

interface CheckboxProps {
  title: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  title,
  checked,
  onChange
}) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox-input"
        />
        <p>{title}</p>
      </label>
    </div>
  );
};

export default Checkbox;
