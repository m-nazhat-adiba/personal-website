import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import gsap from "gsap";

const Header = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse xl:flex-col w-full h-screen lg:items-center xl:justify-end">
        <div className="relative w-full h-full overflow-hidden flex justify-center">
          <div className="absolute top-0 w-full h-full container px-4 xl:px-2 ">
            <div className="bottom-[44%] absolute flex flex-col md:left-0 lg:bottom-14 gap-4">
              <h1 className="w-5 md:text-5xl text-4xl text-red-600 font-semibold leading-tight">
                NAZHAT ADIBA
              </h1>
              <div className="flex flex-col gap-1">
                <p className="text-white font-medium md:text-3xl text-xl">
                  Frontend Developer
                </p>
                <p className="md:text-2xl text-lg text-gray-500 font-medium">
                  From <span className="text-red-600">IN</span>
                </p>
              </div>
            </div>
            <div className="top-[18%] right-100 absolute md:right-0 md:top-[36%] xl:top-auto xl:bottom-[48%] flex flex-col xl:items-end gap-4 items-end">
              <p className="md:block hidden text-gray-500 w-2/3 mr-4 text-right">
                Feel free to check my resume
              </p>
              <button className="group flex items-center gap-3 my-4 xl:my-0 px-6 py-2 border-2 w-fit border-gray-500 text-gray-500 rounded-full duration-200 hover:border-gray-400 hover:scale-110">
                <Icon
                  icon="akar-icons:download"
                  className="md:text-lg text-base group-hover:text-gray-400"
                />
                <p className="group-hover:text-gray-400 md:text-base text-sm">
                  My Resume
                </p>
              </button>
            </div>
            <p className="xl:block hidden absolute right-0 bottom-14 text-gray-400">
              PERSONAL PORTFOLIO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
