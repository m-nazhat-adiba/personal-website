import Header from '@/components/homepage/Header';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react';

function Home() {
  const count = 200;
  const particleClass = 'h-1 w-1 bg-white rounded-full';
  const particleColors = ['#aa00e2', '#7a169c', '#9e67b1'];
  const starCount = 500;
  const starClass = 'h-1 w-1 rounded-full ';
  const starColors = ['#52616B', '#F0F5F9'];

  const stationaryStarAnim = () => {
    const container = document.getElementById('field');
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    let star;
    let randNum;

    for (let i = 0; i <= starCount; i++) {
      star = document.createElement('div');
      star.className = starClass;
      container?.appendChild(star);
      randNum = Math.random();

      gsap.set(star, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) - 0.75 * h,
        scale: gsap.utils.random(1, 1.5),
        backgroundColor: gsap.utils.random(starColors),
      });

      if (randNum % 2) {
        gsap.to(star, {
          delay: -10,
          stagger: 1,
          opacity: 0,
          ease: 'power1.in',
          yoyo: true,
          repeat: -1,
          duration: gsap.utils.random(1, 3),
        });
      }
    }
  };

  const movingAstronautAnim = () => {
    const avatar = document.getElementById('avatar');
    const container = document.getElementById('avatarContainer');
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.fromTo(
      avatar,
      {
        x: -400,
        y: -400,
        zIndex: 50,
      },
      {
        x: w,
        y: h * 0.25,
        ease: 'none',
        scale: 0.75,
        rotation: 180,
        duration: 8,
      },
    );
    tl.to(avatar, {
      x: w * 0.3,
      y: h,
      ease: 'none',
      rotation: 360,
      scale: 0.3,
      duration: 4,
      delay: 2,
      zIndex: 1,
    });
    tl.to(avatar, {
      x: w * 0.25,
      y: -h,
      ease: 'none',
      rotation: 180,
      duration: 10,
      delay: 2,
    });
    tl.to(avatar, {
      x: -400,
      y: h * 0.8,
      rotation: 360,
      scale: 0.6,
      duration: 6,
      delay: 2,
    });
  };

  useEffect(() => {
    stationaryStarAnim();
    movingAstronautAnim();
  }, []);

  return (
    <div className="flex h-full w-screen flex-col">
      {/* Header */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-radial from-[rgba(86,28,110,0.6)_0%] to-[rgb(0,0,0)_120%]">
        <div id="avatarContainer" className="absolute flex h-full w-full">
          <Image
            id="avatar"
            src={'/astronaut.png'}
            width={400}
            height={400}
            alt="astronaut"
            className="h-[300px] w-[300px]"
          />
        </div>
        <div className="absolute bottom-[-980px] flex w-full items-center justify-center">
          <Image
            src={'/planet.png'}
            height={1000}
            width={1000}
            alt="mars"
            className="h-auto w-[1200px]"
          />
        </div>
        <div
          id="field"
          className="absolute top-0 z-0 h-screen w-screen justify-center overflow-hidden bg-gradient-ellipse from-[rgba(255,147,15,0.4)_0%] to-[rgba(0,0,0,0)_50%]"
        ></div>
        <div className="relative mx-0 flex w-full lg:mx-auto lg:w-[1440px]">
          <Header />
          <div className="absolute z-10 flex h-full w-full items-center justify-center">
            <Image
              src={'/satellite.png'}
              width={600}
              height={600}
              alt="satellite"
              className="h-auto w-[720px]"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full">
        <div>
          <Image src={'/mars.png'} width={1449} height={900} alt="mars" />
        </div>
      </section>
    </div>
  );
}

export default Home;
