// components/layout.js

import Navbar from "./navbar";
import React from "react";
import Footer from "./footer";

type LayoutInterface = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutInterface) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
