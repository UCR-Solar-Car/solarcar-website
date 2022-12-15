import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-fixed w-full bg-gradient-radial  from-solar-gray to-solar-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
