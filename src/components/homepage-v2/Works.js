import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { SkillCard } from '../common/cards/SkillCard';
import Image from 'next/image';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { RoughEase } from 'gsap/dist/EasePack';
import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { getWorks } from '@/services/getSupabase';

const WorkPanel = ({ porto, id }) => {
  return (
    <div id="panel" className="flex h-[80%] w-full items-center justify-center">
      <div className="corner-mask-p flex h-auto w-full flex-col items-center justify-center">
        <div className="flex h-8 w-full gap-2">
          <span className="h-full w-4 skew-x-12 bg-[#5fcdd9] shadow-lg shadow-[#5fcdd9]" />
          <span className="h-full w-4 skew-x-12 bg-[#5fcdd9] shadow-lg shadow-[#5fcdd9]" />
          <span className="h-full w-4 skew-x-12 bg-[#5fcdd9] shadow-lg shadow-[#5fcdd9]" />
          <span className="ml-4 flex flex-grow justify-start text-end text-3xl font-semibold text-[#5fcdd9] shadow-[#5fcdd9] [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
            {`PROJECT 0${id + 1}`}
          </span>
          <a href={porto.link_url} target={'_blank'}>
            <div className="flex h-full items-center justify-center text-end text-base font-semibold text-[#5fcdd9] shadow-[#5fcdd9] [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
              Visit Link
            </div>
          </a>
        </div>
        <div className="mt-4 flex h-auto w-full flex-row-reverse items-start justify-center gap-8">
          {/* preview */}
          <div className="flex h-full w-[60%] flex-col items-center justify-start">
            <div className="w-full">
              <span className="flex w-full justify-start text-start text-xl text-[#5fcdd9] shadow-[#5fcdd9] [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                PREVIEW
              </span>
              <span className="shadow-[#5fcdd9 mb-2 flex h-1 w-full rounded-full bg-[#5fcdd9] shadow-xl"></span>
              <Image
                src={porto.image_url}
                height={450}
                width={800}
                alt={porto.title}
                className="h-auto w-full opacity-80 shadow-lg shadow-white"
              />
            </div>
          </div>
          {/* brief */}
          <div className="z-10 flex h-auto w-[40%] flex-col justify-start">
            <span className="flex w-full justify-start text-start text-xl text-[#5fcdd9] shadow-[#5fcdd9] [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
              BRIEF
            </span>
            <span className="mb-2 flex h-1 w-full rounded-full bg-[#5fcdd9] shadow-xl shadow-[#5fcdd9]"></span>
            <div className="flex h-auto w-full flex-col justify-start rounded-lg bg-black bg-opacity-70 px-8 pb-12 pt-8">
              <span className="text-xs text-[#5fcdd9]">TITLE</span>
              <h1 className="mb-5 text-3xl text-[#5fcdd9]">
                {porto.title.toUpperCase()}
              </h1>
              <span className="text-xs text-[#5fcdd9]">DESC</span>
              <p className="text-lg text-[#5fcdd9]">{porto.description}</p>
            </div>
            <div className="mt-4 flex h-auto w-full flex-col gap-4 px-8">
              <span className="text-xs text-[#5fcdd9] shadow-[#5fcdd9] [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                STACKS
              </span>
              <div className="grid w-full grid-cols-5 gap-3">
                {porto.stacks.map((item, key) => (
                  <SkillCard data={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Works = () => {
  gsap.registerPlugin(ScrollTrigger);

  const uiRef = useRef();

  const { data: worksData, error, loading } = getWorks();

  const wiggleParallax = (e, target, movement) => {
    const container = document.getElementById('room');
    const transitionContainer = document.getElementById('works-transition');
    const heroContainer = document.getElementById('hero');
    const navContainer = document.getElementById('nav');

    if (!container) return;
    const relPageY =
      e.pageY -
      heroContainer.offsetHeight -
      transitionContainer.offsetHeight -
      navContainer.offsetHeight +
      410;
    const relX = e.pageX - container.offsetLeft;
    const relY = relPageY - container.offsetTop;

    gsap.to(target, {
      duration: 1,
      x:
        ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
      y:
        ((relY - container.offsetHeight / 2) / container.offsetHeight) *
        movement,
    });
  };

  useEffect(() => {
    const container = document.getElementById('room');
    if (!container) return;

    const handleMouseMove = (e) => {
      wiggleParallax(e, uiRef.current, -100);
      wiggleParallax(e, '#room-bg', -30);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Entrance Anim
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#room',
        start: 'bottom center',
      },
    });
    tl.from('#room', {
      opacity: 0,
      ease: 'power3.out',
      duration: 1,
    });
    tl.add('marker').from(uiRef.current, {
      opacity: 0,
      ease: RoughEase.ease.config({
        template: 'circ.easeOut',
        strength: 4,
        points: 50,
        taper: 'out',
        randomize: true,
        clamp: true,
      }),
      duration: 0.5,
    });
  });

  return (
    <section
      id="room"
      className="relative flex h-screen w-screen flex-col justify-center overflow-hidden"
    >
      {/* bg */}
      <div className="absolute flex h-full w-screen items-center justify-center">
        <div
          id="room-bg"
          className="flex h-[120%] w-[120%] bg-[url('/image/bg-works.jpg')] bg-cover bg-center"
        ></div>
      </div>

      {/* content */}
      <Swiper
        ref={uiRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {worksData &&
          worksData.map((item, key) => (
            <SwiperSlide key={key}>
              <WorkPanel porto={item} id={key} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
