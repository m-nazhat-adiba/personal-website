import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl text-gray-400 font-semibold text-center">
        Used <span className="text-red-500">Technologies</span>
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 xl:flex gap-8 justify-center text-7xl text-gray-500">
        <Icon icon="bxl:react" className="mx-auto" />
        <Icon icon="fa6-brands:square-js" className="p-1 mx-auto" />
        <Icon icon="bxl:tailwind-css" className="mx-auto" />
        <Icon icon="bxl:css3" className="mx-auto" />
        <Icon icon="bxl:html5" className="mx-auto" />
        <Icon icon="bxl:bootstrap" className="mx-auto" />
        <Icon icon="file-icons:vite" className="p-1 mx-auto" />
        <Icon icon="cib:next-js" className="p-1 mx-auto" />
        <Icon icon="bxl:git" className="mx-auto" />
        <Icon icon="bxl:github" className="mx-auto" />
        <Icon icon="akar-icons:vscode-fill" className="p-1 mx-auto" />
        <Icon icon="bxl:figma" className="p-1 mx-auto" />
      </div>
    </div>
  );
};

export default Skills;
