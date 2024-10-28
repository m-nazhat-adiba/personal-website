import worksData from '@/dummy_data/works';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { SkillCard } from '../common/cards/SkillCard';
import Image from 'next/image';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { RoughEase } from 'gsap/dist/EasePack';
import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';

export const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [portoIndex, setPortoIndex] = useState(2);
  const [porto, setPorto] = useState(worksData[portoIndex]);
  const uiRef = useRef();
  const panelRef = useRef();
  const backRef = useRef();
  const nextRef = useRef();
  const portoLength = worksData.length - 1;

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

  const handleNext = () => {
    if (portoIndex < portoLength) {
      setPorto(worksData[portoIndex + 1]);
      setPortoIndex(portoIndex + 1);
    } else {
      setPorto(worksData[0]);
      setPortoIndex(0);
    }
  };
  const handleBack = () => {
    if (portoIndex > 0) {
      setPorto(worksData[portoIndex - 1]);
      setPortoIndex(portoIndex - 1);
    } else {
      setPorto(worksData[portoLength]);
      setPortoIndex(portoLength);
    }
  };

  useEffect(() => {
    const container = document.getElementById('room');
    if (!container) return;

    const handleMouseMove = (e) => {
      wiggleParallax(e, '#ui-slide', -100);
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

  useGSAP((context, contextSafe) => {
    const onClickAnim = contextSafe(() => {
      gsap.from(panelRef.current, {
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
    backRef.current.addEventListener('click', onClickAnim);
    nextRef.current.addEventListener('click', onClickAnim);

    return () => {
      nextRef.current.removeEventListener('click', onClickAnim);
      backRef.current.removeEventListener('click', onClickAnim);
    };
  });

  return (
    <section
      id="room"
      className="relative flex h-screen w-screen flex-col justify-start overflow-hidden"
    >
      {/* bg */}
      <div className="absolute flex h-full w-screen items-center justify-center">
        <div
          id="room-bg"
          className="flex h-[120%] w-[120%] bg-[url('/image/bg-works.jpg')] bg-cover bg-center"
        ></div>
      </div>

      {/* content */}
      <div
        id="ui-slide"
        ref={uiRef}
        className="flex h-full w-full min-w-[100vw] origin-center items-center justify-center"
      >
        <div
          ref={backRef}
          onClick={handleBack}
          className="flex h-full w-full items-center justify-center"
        >
          <div className="corner-mask flex h-auto w-1/3">
            <Icon
              className="h-auto w-full bg-black bg-opacity-60 p-6"
              icon="oi:chevron-left"
            />
          </div>
        </div>
        <div
          ref={panelRef}
          id="panel"
          className="flex h-full w-full min-w-[70%] items-center justify-center lg:min-w-[64%]"
        >
          <div className="corner-mask-p flex h-auto w-full flex-col items-center justify-center">
            <div className="flex h-8 w-full gap-2">
              <span className="h-full w-4 skew-x-12 bg-white shadow-lg shadow-white" />
              <span className="h-full w-4 skew-x-12 bg-white shadow-lg shadow-white" />
              <span className="h-full w-4 skew-x-12 bg-white shadow-lg shadow-white" />
              <span className="ml-4 flex justify-start text-end text-3xl font-semibold shadow-white [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                {`PROJECT 0${portoIndex + 1}`}
              </span>
            </div>
            <div className="mt-4 flex h-auto w-full flex-row-reverse items-start justify-center gap-8">
              {/* preview */}
              <div className="flex h-full w-[60%] flex-col items-center justify-start">
                <div className="w-full">
                  <span className="flex w-full justify-start text-start text-xl shadow-white [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                    PREVIEW
                  </span>
                  <span className="mb-2 flex h-1 w-full rounded-full bg-white shadow-xl shadow-white"></span>
                  <Image
                    src={porto.src}
                    height={450}
                    width={800}
                    alt={porto.title}
                    className="h-auto w-full opacity-80 shadow-lg shadow-white"
                  />
                </div>
              </div>
              {/* brief */}
              <div className="z-10 flex h-auto w-[40%] flex-col justify-start">
                <span className="flex w-full justify-start text-start text-xl shadow-white [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                  BRIEF
                </span>
                <span className="mb-2 flex h-1 w-full rounded-full bg-white shadow-xl shadow-white"></span>
                <div className="flex h-auto w-full flex-col justify-start rounded-lg bg-black bg-opacity-50 px-8 pb-12 pt-8">
                  <span className="text-xs">TITLE</span>
                  <h1 className="mb-5 text-3xl">{porto.title.toUpperCase()}</h1>
                  <span className="text-xs">DESC</span>
                  <p className="text-lg">{porto.desc}</p>
                </div>
                <div className="mt-4 flex h-auto w-full flex-col gap-4 px-8">
                  <span className="text-xs shadow-white [text-shadow:_1px_0_10px_var(--tw-shadow-color)]">
                    STACKS
                  </span>
                  <div className="grid w-full grid-cols-5 gap-3">
                    {porto.tags.map((item, key) => (
                      <SkillCard data={item} key={key} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={nextRef}
          onClick={handleNext}
          className="flex h-full w-full items-center justify-center"
        >
          <div className="corner-mask flex h-auto w-1/3">
            <Icon
              className="h-auto w-full bg-black bg-opacity-60 p-6"
              icon="oi:chevron-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
