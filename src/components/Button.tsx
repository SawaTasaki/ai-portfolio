import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  bgColor,
  hoverColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`mr-4 px-4 py-2 text-white rounded ${bgColor} hover:${hoverColor}`}
    >
      {label}
    </button>
  );
};

export default Button;
