import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex flex-col w-full h-[740px] items-center justify-end">
      <div className="flex w-[640px] h-auto">
        <img src="/Header-2.png" alt="banner" />
      </div>
      <div className="absolute flex flex-col left-0 bottom-12 gap-4">
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
    </div>
  );
};

export default Header;
