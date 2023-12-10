import React from "react";
import NavBar from "../navigation";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="px-4 xl:px-2 w-full">
      <div className="absolute w-full top-0">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
