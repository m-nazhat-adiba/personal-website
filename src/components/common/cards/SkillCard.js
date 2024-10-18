import { Icon } from "@iconify/react";
import React from "react";

export const SkillCard = ({ data }) => {
  const IconSelector = () => {
    switch (data) {
      case "React":
        return (
          <Icon
            className="w-full h-auto text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400 p-2"
            icon="nonicons:react-16"
          />
        );
      case "Typescript":
        return (
          <Icon
            className="w-full h-auto p-3 text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400"
            icon="nonicons:typescript-16"
          />
        );
      case "Next.js":
        return (
          <Icon
            className="w-full h-auto p-2 text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400"
            icon="nonicons:next-16"
          />
        );
      case "Javascript":
        return (
          <Icon
            className="w-full h-auto p-3 text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400"
            icon="nonicons:javascript-16"
          />
        );
      case "Tailwind":
        return (
          <Icon
            className="w-full h-auto p-2 text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400"
            icon="flowbite:tailwind-solid"
          />
        );
      default:
        return (
          <span className="text-fuchsia-500 [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-fuchsia-400 font-semibold">
            {data}
          </span>
        );
    }
  };

  return (
    <div className="h-full w-full bg-gray-700 p-1 bg-opacity-50">
      <IconSelector />
    </div>
  );
};
