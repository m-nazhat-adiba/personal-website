import { Icon } from '@iconify/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const Header = () => {
  return (
    <>
      <div className="relative z-40 flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-9xl font-semibold">
            NAZ
            <span className="stroke-white text-transparent text-stroke-bold">
              HAT A
            </span>
            DIBA
          </h1>
          <p className="flex w-full px-2 text-start text-2xl font-light">
            front-end developer
          </p>
        </div>
        <div className="absolute bottom-0 flex w-full flex-col items-center justify-center">
          <p className="text-sm font-light">Look to know what i do</p>
          <Icon icon="akar-icons:chevron-down" className="mb-5 mt-2 h-5 w-5" />
        </div>
      </div>
    </>
  );
};

export default Header;
