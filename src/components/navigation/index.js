import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleNavList = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-col w-full justify-between my-8 py-4 px-4 md:px-2 bg-gray-900 bg-opacity-60 rounded-full">
      <div className="flex w-full justify-between">
        <div className="flex h-6 w-auto">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={72}
            height={72}
            priority={false}
          />
        </div>
        {/* Navlist md: */}
        <div className="hidden md:flex items-center px-4">
          <ul className="flex list-none text-sm gap-8">
            <li>HOME</li>
            <li>WORKS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        {/* Burger */}
        <Icon
          icon="akar-icons:three-line-horizontal"
          className="text-red-600 w-8 h-8 block md:hidden"
          onClick={handleNavList}
        />
      </div>
      <div className="block md:hidden">
        <ul
          className={clsx(
            "list-none text-sm gap-10 py-5 items-center",
            isVisible ? "flex flex-col" : "hidden"
          )}
        >
          <li>HOME</li>
          <li>WORKS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
