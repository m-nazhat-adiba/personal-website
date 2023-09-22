import React from "react";
import NavBar from "../navigation";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="container w-full">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
