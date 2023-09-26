import React from "react";
import Image from "next/image";
import Banner from "../../../public/Header-2.png";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-col w-full h-[88vh] md:h-[90vh] md:items-center md:justify-end">
      <div className="flex w-[400px] md:w-[800px] h-auto mx-auto">
        <Image
          src={Banner}
          width={1000}
          height={1100}
          alt="Banner"
          priority={false}
        />
      </div>
      <div className="md:absolute flex flex-col md:left-0 md:bottom-14 gap-4">
        <h1 className="w-5 text-5xl text-red-600 font-semibold leading-tight">
          NAZHAT ADIBA
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-white font-medium text-3xl">Frontend Developer</p>
          <p className="text-2xl text-gray-500 font-medium">
            From <span className="text-red-600">IN</span>
          </p>
        </div>
      </div>
      <div className="md:absolute right-0 bottom-[48%] flex flex-col md:items-end gap-4">
        <p className="md:block hidden text-gray-500 w-2/3 text-right mr-4">
          Feel free to check my resume
        </p>
        <button className="group flex items-center gap-3 my-4 md:my-0 px-6 py-2 border-2 w-fit border-gray-500 text-gray-500 rounded-full duration-200 hover:border-gray-400 hover:scale-110">
          <Icon
            icon="akar-icons:download"
            className="text-lg group-hover:text-gray-400"
          />
          <p className="group-hover:text-gray-400">My Resume</p>
        </button>
      </div>
      <p className="md:block hidden absolute right-0 bottom-14 text-gray-400">
        PERSONAL PORTFOLIO
      </p>
    </div>
  );
};

export default Header;
