import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Button } from '../buttons';

const WorkCard = ({ data }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-8 rounded-lg bg-gray-200 bg-opacity-10 p-8 xl:items-end',
        data.id % 2 === 0
          ? 'flex-col md:flex-row-reverse'
          : 'flex-col md:flex-row',
      )}
    >
      <Image
        src={data.src}
        height={500}
        width={600}
        alt={data.title}
        className="h-auto w-80 rounded-xl xl:w-[600px]"
      />
      <div className="flex flex-col justify-end gap-4">
        <h1 className="text-center text-3xl font-semibold uppercase tracking-widest md:text-left xl:text-4xl">
          {data.title}
        </h1>
        <p className="text-center text-xl font-semibold text-gray-300 md:text-left xl:text-2xl/normal">
          {data.desc}
        </p>
        <div className="my-1 mb-4 flex justify-center gap-5 md:justify-start">
          {data.tags.map((item, key) => (
            <p key={key} className="text-gray-400">
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
