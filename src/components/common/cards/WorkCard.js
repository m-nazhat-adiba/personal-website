import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../buttons";

const WorkCard = ({ data }) => {
  return (
    <div
      className={clsx(
        "flex gap-8 items-center xl:items-end bg-gray-200 bg-opacity-10 p-8 rounded-lg",
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
        <p className="text-center md:text-left text-xl xl:text-2xl/normal text-gray-300 font-semibold">
          {data.desc}
        </p>
        <div className="flex gap-5 my-1 mb-4 justify-center md:justify-start">
          {data.tags.map((item, key) => (
            <p key={key} className="text-gray-400 ">
              {item}
            </p>
          ))}
        </div>
        <Button target={data.url}></Button>
      </div>
    </div>
  );
};

export default WorkCard;
