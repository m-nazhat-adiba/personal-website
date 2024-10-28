import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 px-4 py-20 md:px-0">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-semibold text-gray-500 md:text-6xl">
          Get <span className="text-red-600">in Touch</span>
        </h1>
        <p className="text-sm text-gray-500 md:text-base">
          So that we can talk more about...
        </p>
      </div>
      <div className="flex justify-center gap-10 text-gray-500 md:gap-14">
        <Link href="https://www.m.nazhat.adiba@gmail.com">
          <Icon icon="akar-icons:envelope" className="h-5 w-5 md:h-7 md:w-7" />
        </Link>
        <Link href="https://github.com/m-nazhat-adiba">
          <Icon
            icon="akar-icons:github-fill"
            className="h-5 w-5 md:h-7 md:w-7"
          />
        </Link>
        <Icon
          icon="akar-icons:telegram-fill"
          className="h-5 w-5 md:h-7 md:w-7"
        />
        <Link href="https://www.linkedin.com/in/mnadiba">
          <Icon
            icon="akar-icons:linkedin-fill"
            className="h-5 w-5 md:h-7 md:w-7"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
