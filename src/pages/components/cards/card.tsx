import React from "react";

type CardInterface = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardInterface) {
  return (
    <div
      className={`max-w-lg rounded overflow-hidden shadow-lg break-words ${className}`}
    >
      {children}
    </div>
  );
}
