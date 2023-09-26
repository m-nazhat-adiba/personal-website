import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl text-gray-400 font-semibold text-center">
        Used <span className="text-red-500">Technologies</span>
      </h1>
      <div className="flex gap-8 justify-center text-7xl text-gray-500">
        <Icon icon="bxl:react" />
        <Icon icon="fa6-brands:square-js" className="p-1" />
        <Icon icon="bxl:tailwind-css" />
        <Icon icon="bxl:css3" />
        <Icon icon="bxl:html5" />
        <Icon icon="bxl:bootstrap" />
        <Icon icon="file-icons:vite" className="p-1" />
        <Icon icon="cib:next-js" className="p-1" />
        <Icon icon="bxl:git" />
        <Icon icon="bxl:github" />
        <Icon icon="bxl:figma" className="p-1" />
      </div>
    </div>
  );
};

export default Skills;
