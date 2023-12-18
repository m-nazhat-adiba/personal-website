import React from "react";
import NavBar from "../navigation";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <div className="relative w-full top-0 container mx-auto">
        <div className="absolute w-full px-4 xl:px-2">
          <NavBar />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
