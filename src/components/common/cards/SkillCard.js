import { Icon } from '@iconify/react';
import React from 'react';

export const SkillCard = ({ data }) => {
  const IconSelector = () => {
    switch (data) {
      case 'React':
        return (
          <Icon
            className="h-auto w-full p-2 text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]"
            icon="nonicons:react-16"
          />
        );
      case 'Typescript':
        return (
          <Icon
            className="h-auto w-full p-3 text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]"
            icon="nonicons:typescript-16"
          />
        );
      case 'Next.js':
        return (
          <Icon
            className="h-auto w-full p-2 text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]"
            icon="nonicons:next-16"
          />
        );
      case 'Javascript':
        return (
          <Icon
            className="h-auto w-full p-3 text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]"
            icon="nonicons:javascript-16"
          />
        );
      case 'Tailwind CSS':
        return (
          <Icon
            className="h-auto w-full p-2 text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]"
            icon="flowbite:tailwind-solid"
          />
        );
      default:
        return (
          <span className="font-semibold text-fuchsia-500 shadow-fuchsia-400 [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
            {data}
          </span>
        );
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-700 bg-opacity-50 p-1">
      <IconSelector />
    </div>
  );
};
