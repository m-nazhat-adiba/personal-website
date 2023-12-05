import React from "react";
import NavBar from "../navigation";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="container px-4 xl:px-2 w-full mx-auto">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
