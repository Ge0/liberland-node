import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="content">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}