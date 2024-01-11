import React from "react";
import NavBar from "../navigation";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="absolute w-full px-4 xl:px-6">
        <NavBar />
      </div>
      {children}
      <div className="bg-[#280A2D]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
