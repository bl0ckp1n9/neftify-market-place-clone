import React from "react";

type InfoLayoutInterface = {
  children: React.ReactNode;
  className: string;
  header: () => React.ReactNode;
};
export default function InfoLayout({
  children,
  header,
  className,
}: InfoLayoutInterface) {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-y-4">{header()}</div>
      <div className={`${className} mt-24 grid `}>{children}</div>
    </div>
  );
}
