import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleNavList = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="my-5 flex w-full flex-col justify-between rounded-full bg-gray-900 bg-opacity-60 py-4 md:my-8">
      <div className="flex w-full justify-between px-5">
        <div className="flex h-auto w-10">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={72}
            height={72}
            priority={false}
          />
        </div>
        {/* Burger */}
        <Icon
          icon="akar-icons:three-line-horizontal"
          className="block h-8 w-8 text-red-600 md:hidden"
          onClick={handleNavList}
        />
        {/* Navlist md: */}
        <div className="w-f hidden items-center px-4 md:flex">
          <ul className="flex list-none gap-8 text-sm">
            <li>HOME</li>
            <li>WORKS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="relative block md:hidden">
        <ul
          className={clsx(
            'absolute top-6 z-[9999] w-full list-none items-center gap-10 rounded-lg bg-gray-900 py-5 text-sm',
            isVisible ? 'flex flex-col' : 'hidden',
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
