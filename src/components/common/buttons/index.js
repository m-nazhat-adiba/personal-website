import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export const Button = ({ children, target }) => {
  return (
    <Link href={target}>
      <button className="mx-auto md:mx-0 flex flex-row-reverse items-center gap-3 my-4 md:my-0 px-6 py-2 border-2 w-fit border-gray-500 text-gray-300 rounded-full hover:bg-white hover:border-white hover:text-black hover:-translate-y-1 duration-150">
        <Icon icon="akar-icons:chevron-right-small" className="text-lg" />
        <p className="text-base">View Project</p>
      </button>
    </Link>
  );
};
