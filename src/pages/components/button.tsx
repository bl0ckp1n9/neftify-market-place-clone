import React from "react";

type ButtonInterface = {
  color: string;
  children: React.ReactNode;

  className?: string;
  onClick?: () => void;
};

export default function Button({
  color,
  children,
  onClick,
  className,
}: ButtonInterface) {
  const colorVariants: { [key: string]: string } = {
    primary: "bg-blue-500 hover:bg-blue-700",
    white: "bg-white text-black hover:bg-gray-100",
    red: "bg-red-600 hover:bg-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${colorVariants[color]} ${className} rounded-md`}
    >
      {children}
    </button>
  );
}
