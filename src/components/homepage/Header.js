import { Icon } from "@iconify/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const Header = () => {
  return (
    <>
      <div className="relative flex flex-col w-full h-screen justify-center items-center z-40">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-9xl font-semibold">
            NAZ
            <span className="text-transparent text-stroke-bold stroke-white">
              HAT A
            </span>
            DIBA
          </h1>
          <p className="w-full flex px-2 text-2xl text-start font-light">
            front-end developer
          </p>
        </div>
        <div className="absolute bottom-0 w-full items-center justify-center flex flex-col">
          <p className="text-sm font-light">Look to know what i do</p>
          <Icon icon="akar-icons:chevron-down" className="h-5 w-5 mb-5 mt-2" />
        </div>
      </div>
    </>
  );
};

export default Header;
