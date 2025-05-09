import React from "react";
import "./InputText.scss";

interface InputTextProps {
  type: string;
  value: string;
  placeholder?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const InputText: React.FC<InputTextProps> = ({
  type,
  value,
  placeholder,
  onChange
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input-text"
    />
  );
};

export default InputText;
