import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const WorkCard = ({ data }) => {
  return (
    <div
      className={clsx(
        "flex gap-8",
        data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Image
        src={data.src}
        height={500}
        width={600}
        alt={data.title}
        className="md:w-[600px] h-auto rounded-xl"
      />
      <div className="flex flex-col justify-end gap-4">
        <h1 className="text-4xl uppercase font-semibold tracking-widest">
          {data.title}
        </h1>
        <p className="text-3xl leading-normal text-gray-300 font-semibold">
          {data.desc}
        </p>
        <div className="flex gap-5 my-1 mb-4">
          {data.tags.map((item, key) => (
            <p key={key} className="text-gray-400 ">
              {item}
            </p>
          ))}
        </div>
        <button className="group flex flex-row-reverse items-center gap-3 my-4 md:my-0 px-6 py-2 border-2 w-fit border-gray-500 text-gray-300 rounded-full duration-200 hover:border-gray-400 hover:scale-110">
          <Icon
            icon="akar-icons:chevron-right-small"
            className="text-lg group-hover:text-gray-300"
          />
          <p className="group-hover:text-gray-300">My Resume</p>
        </button>
      </div>
    </div>
  );
};

export default WorkCard;