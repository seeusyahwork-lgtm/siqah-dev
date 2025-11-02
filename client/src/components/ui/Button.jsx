// src/components/ui/button.jsx
import React from "react";
import clsx from "clsx";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-300",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-300",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-300",
    success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-300",
    outline:
      "border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-200",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const finalClass = clsx(baseStyle, variants[variant], sizes[size], className);

  return (
    <button type={type} onClick={onClick} className={finalClass} {...props}>
      {children}
    </button>
  );
};
