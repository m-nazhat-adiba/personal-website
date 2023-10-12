import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const WorkCard = ({ data }) => {
  return (
    <div
      className={clsx(
        "flex gap-8 items-center md:items-end",
        data.id % 2 === 0
          ? "flex-col md:flex-row-reverse"
          : "flex-col md:flex-row"
      )}
    >
      <Image
        src={data.src}
        height={500}
        width={600}
        alt={data.title}
        className="w-80 xl:w-[600px] h-auto rounded-xl"
      />
      <div className="flex flex-col justify-end gap-4">
        <h1 className="text-center md:text-left text-3xl xl:text-4xl uppercase font-semibold tracking-widest">
          {data.title}
        </h1>
        <p className="text-center md:text-left text-2xl xl:text-3xl/normal text-gray-300 font-semibold">
          {data.desc}
        </p>
        <div className="flex gap-5 my-1 mb-4 justify-center md:justify-start">
          {data.tags.map((item, key) => (
            <p key={key} className="text-gray-400 ">
              {item}
            </p>
          ))}
        </div>
        <button className="group mx-auto md:mx-0 flex flex-row-reverse items-center gap-3 my-4 md:my-0 px-6 py-2 border-2 w-fit border-gray-500 text-gray-300 rounded-full duration-200 hover:border-gray-400 hover:scale-110">
          <Icon
            href={data.url}
            icon="akar-icons:chevron-right-small"
            className="text-lg group-hover:text-gray-300"
          />
          <p className="group-hover:text-gray-300">View Project</p>
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
