import React from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center text-4xl font-semibold text-gray-400">
        Used <span className="text-red-500">Technologies</span>
      </h1>
      <div className="grid grid-cols-3 justify-center gap-8 text-7xl text-gray-800 md:grid-cols-6 xl:flex">
        <Icon icon="bxl:react" className="mx-auto" />
        <Icon icon="fa6-brands:square-js" className="mx-auto p-1" />
        <Icon icon="bxl:tailwind-css" className="mx-auto" />
        <Icon icon="bxl:css3" className="mx-auto" />
        <Icon icon="bxl:html5" className="mx-auto" />
        <Icon icon="fa6-brands:vuejs" className="mx-auto" />
        <Icon icon="cib:next-js" className="mx-auto p-1" />
        <Icon icon="bxl:git" className="mx-auto" />
        <Icon icon="bxl:github" className="mx-auto" />
        <Icon icon="akar-icons:typescript-fill" className="mx-auto p-1.5" />
        <Icon icon="bxl:bootstrap" className="mx-auto" />
        <Icon icon="bxl:figma" className="mx-auto p-1" />
      </div>
    </div>
  );
};

export default Skills;
