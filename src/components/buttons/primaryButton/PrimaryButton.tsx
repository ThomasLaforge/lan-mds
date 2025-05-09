import React from "react";
import "./PrimaryButton.scss";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: React.ReactNode;
  onclick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`button ${variant}`}
      {...props}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default PrimaryButton;
