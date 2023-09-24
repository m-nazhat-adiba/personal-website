import React from "react";
import Image from "next/image";
import Banner from "../../../public/Header-2.png";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="relative flex flex-col w-full h-[90vh] items-center justify-end">
      <div className="flex w-[800px] h-auto">
        <Image
          src={Banner}
          width={1000}
          height={1100}
          alt="Banner"
          priority={false}
        />
      </div>
      <div className="absolute flex flex-col left-0 bottom-14 gap-4">
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
      <div className="absolute right-0 bottom-[48%] flex flex-col items-end gap-4">
        <p className="text-gray-500 w-2/3 text-right mr-4">
          Feel free to check my resume
        </p>
        <button className="flex items-center gap-3 px-6 py-2 border-2 w-fit border-gray-500 text-gray-500 rounded-full">
          <Icon icon="akar-icons:download" className="text-lg" />
          <p>My Resume</p>
        </button>
      </div>
      <p className="absolute right-0 bottom-14 text-gray-400">
        PERSONAL PORTFOLIO
      </p>
    </div>
  );
};

export default Header;
