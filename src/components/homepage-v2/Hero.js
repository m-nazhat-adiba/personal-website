import { Icon } from '@iconify/react';
import React from 'react';
import { ProfileFrame } from '../assets/svg/ProfileFrame';
import Image from 'next/image';
import clsx from 'clsx';

export const Hero = ({ playback, track }) => {
  return (
    <section id="hero" className="h-[calc(100vh_-_88px)] w-full px-10">
      {/* backdrop */}
      <div className="relative h-auto w-full">
        {/* title */}
        <div className="absolute top-[9%] z-10 flex flex-col gap-5">
          <h1 className="w-[576px] text-[32px] font-semibold leading-tight text-white">
            SHAPING DIGITAL EXPERIENCES WITH PASSION AND EXPERTISE
          </h1>
          <span className="text-base font-[300] text-white">
            A Portfolio Page
          </span>
        </div>
        {/* skills */}
        <div className="absolute bottom-0 left-[1%] flex h-1/2 flex-col justify-center gap-6">
          <div className="h-[65px] w-[65px] rounded-full bg-fuchsia-700">
            <Icon
              className="h-auto w-full p-2 text-black"
              icon="nonicons:next-16"
            />
          </div>
          <div className="h-[65px] w-[65px] rounded-full bg-fuchsia-700">
            <Icon
              className="h-auto w-full p-3 text-black"
              icon="nonicons:typescript-16"
            />
          </div>
          <div className="h-[65px] w-[65px] rounded-full bg-fuchsia-700">
            <Icon
              className="h-auto w-full p-2 text-black"
              icon="nonicons:react-16"
            />
          </div>
        </div>
        {/* social */}
        <div className="absolute right-[2%] top-0 flex h-1/2 flex-col justify-center gap-8 text-white">
          <Icon className="h-auto w-7" icon="akar-icons:linkedin-fill" />
          <Icon className="h-auto w-7" icon="akar-icons:github-fill" />
          <Icon className="h-auto w-7" icon="akar-icons:envelope" />
        </div>
        {/* profile */}
        <div className="absolute bottom-0 right-[6%] z-[2]">
          <div className="h-[380px] w-[380px]">
            <ProfileFrame
              className="h-full w-full text-transparent"
              gradientColors={['#3C3D37', 'transparent']}
              gradientOpacity={[0.8, 0]}
            />
            <Image
              src={'/image/profile.jpg'}
              height={200}
              width={200}
              alt="profile"
              className={clsx(
                'absolute left-[14%] top-[14%] h-[160px] w-[160px] rounded-full',
                playback ? 'animate-spin-slow' : 'animate-none',
              )}
            />
          </div>
          <div className="absolute bottom-[15%] left-[50%] flex flex-col">
            <span className="mb-1 text-[20px] font-medium leading-normal">
              NAZHAT ADIBA
            </span>
            <span className="text-xs">frontend developer</span>
            <span className="text-[10px]">indonesia</span>
          </div>
        </div>
        {/* backdrop */}
        <figure
          id="backdrop"
          className="-z-50 flex h-[calc(100vh_-_176px)] w-full justify-center px-24"
        >
          <div className="relative flex h-full w-full items-center justify-between">
            <div className="pulsing-effect absolute inset-0 z-[-1] border-2 border-black bg-[url('/image/backdrop.png')] bg-cover bg-center" />
            <Image
              src={'/svg/frame-l.svg'}
              width={1440}
              height={900}
              alt="backdrop"
              priority={false}
              className="h-full w-auto object-cover"
            />
            <Image
              src={'/svg/frame-r.svg'}
              width={1440}
              height={900}
              alt="backdrop"
              priority={false}
              className="h-full w-auto object-cover"
            />
          </div>
        </figure>

        {playback && (
          <div className="absolute bottom-0 right-0 flex flex-col items-end">
            <span className="text-[10px] text-gray-300">Now Playing</span>
            <span className="text-xs">{track}</span>
          </div>
        )}
      </div>
      {/* foot */}
      <div className="relative flex h-[88px] w-full items-center justify-center bg-black">
        <span className="text-sm tracking-[.25em]">scroll to learn more</span>
      </div>
    </section>
  );
};
