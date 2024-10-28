import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

export const Button = ({ children, target }) => {
  return (
    <Link href={target}>
      <button className="mx-auto my-4 flex w-fit flex-row-reverse items-center gap-3 rounded-full border-2 border-gray-500 px-6 py-2 text-gray-300 duration-150 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black md:mx-0 md:my-0">
        <Icon icon="akar-icons:chevron-right-small" className="text-lg" />
        <p className="text-base">View Project</p>
      </button>
    </Link>
  );
};
