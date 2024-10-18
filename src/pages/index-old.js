import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const count = 200;
  const particleClass = "h-1 w-1 bg-white rounded-full";
  const particleColors = ["#aa00e2", "#7a169c", "#9e67b1"];

  const starCount = 500;
  const starClass = "h-1 w-1 rounded-full";
  const starColors = ["#52616B", "#F0F5F9"];

  const shootingStarAnim = () => {
    const container = document.getElementById("starField");
    let w = container?.offsetWidth;
    let h = container?.offsetHeight;
    let elem;
    let elemX;
    let elemY;

    for (let i = 0; i <= 10; i++) {
      elem = document.createElement("div");
      elem.className = "absolute rounded-full h-1 w-1";
      container?.appendChild(elem);

      elemX = gsap.utils.random(0, w);
      elemY = gsap.utils.random(0, h);

      gsap.set(elem, {
        x: elemX,
        y: elemY,
        scale: gsap.utils.random(0.5, 1.2),
        backgroundColor: "#5f91ff",
      });

      gsap.to(elem, {
        x: elemX + 500,
        y: elemY + 500,
        ease: "none",
        repeat: -1,
        duration: 0.5,
        delay: -10,
      });
    }
  };

  const nextLoad = () => {
    rocketOutAnim();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const stationaryStarAnim = () => {
    const container = document.getElementById("field");
    let w = container?.offsetWidth;
    let h = container?.offsetHeight;
    let star;
    let randNum;

    for (let i = 0; i <= starCount; i++) {
      star = document.createElement("div");
      star.className = starClass;
      container?.appendChild(star);
      gsap.set(star, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) - 0.75 * h,
        scale: gsap.utils.random(0.5, 1.2),
        backgroundColor: gsap.utils.random(starColors),
      });
      randNum = Math.random();
      if (randNum % 2) {
        blink(star);
      }
    }
  };

  const rocketOutAnim = () => {
    gsap.to(".RocketInit", {
      x: "120",
      duration: 0.4,
      ease: "power1.out",
    });
    gsap.to(".RocketOut", {
      delay: 0.4,
      x: "-100vw",
      duration: 0.5,
      ease: "sine.in",
    });
  };

  const blink = (elem) => {
    gsap.to(elem, {
      delay: -10,
      stagger: 1,
      opacity: 0,
      ease: "power1.in",
      yoyo: true,
      repeat: -1,
      duration: gsap.utils.random(1, 3),
    });
  };

  const pulseRocketAnim = () => {
    gsap.to(".Rocket", {
      y: "30",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const particleAnim = () => {
    const container = document.getElementById("container");
    let w = container?.offsetWidth;
    let h = container?.offsetHeight;
    let elem;

    for (let i = 0; i < count; i++) {
      elem = document.createElement("div");
      elem.className = particleClass;
      container?.appendChild(elem);
      gsap.set(elem, {
        x: gsap.utils.random(0, w) - w,
        y: gsap.utils.random(0, h),
        scale: gsap.utils.random(0.5, 1.5),
        backgroundColor: gsap.utils.random(particleColors),
      });
      anim(elem, w);
    }
  };

  const anim = (elem, w) => {
    gsap.to(elem, {
      x: w,
      ease: "none",
      duration: gsap.utils.random(1, 5),
      repeat: -1,
      delay: -10,
    });
  };

  // const scrollAnim = () => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#field",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   gsap.utils.toArray(".parallax").forEach((layer) => {
  //     const depth = layer.dataset.depth;
  //     const movement = -(layer.offsetHeight * depth);
  //     tl.to(layer, { y: movement, ease: "none" }, 0);
  //   });
  // };

  useEffect(() => {
    if (isLoading) {
      pulseRocketAnim();
      particleAnim();
    } else {
      stationaryStarAnim();
      shootingStarAnim();
    }
    // scrollAnim();
  }, [isLoading]);

  return (
    <div className=" w-full h-full relative">
      {isLoading ? (
        <section className="w-full h-screen flex flex-col justify-center items-center relative">
          <div
            id="container"
            className="absolute w-full h-full overflow-hidden flex flex-col justify-center top-0 bg-gradient-to-r from-[rgb(0,0,0)_0%] to-[rgba(86,28,110,0.5)_90%] -z-10"
          ></div>
          <img
            src="/rocket.png"
            className="Rocket RocketInit RocketOut w-1/4 h-auto"
          />
          <button
            onClick={nextLoad}
            className="absolute bottom-20 text-2xl text-white"
          >
            GO
          </button>
        </section>
      ) : null}

      {!isLoading ? (
        <section className="bg-gradient-to-r from-[rgb(0,0,0)_0%] to-[rgba(86,28,110,0.6)_120%]">
          <Layout>
            <div
              id="starField"
              className="absolute w-full h-screen overflow-hidden top-0 z-[9999]"
            ></div>
            <div
              id="field"
              className="absolute w-full h-1/2 overflow-hidden justify-center top-0"
            ></div>
            <div className=" mx-auto flex flex-col w-full">
              <Header />
              <section className="w-full">
                <div className="relative w-full">
                  <div className="w-full flex">
                    <div className="container mx-auto mt-40">
                      <Works />
                    </div>
                  </div>
                </div>
                <div className="w-full relative">
                  <div className="flex flex-col items-center justify-center absolute w-full md:bottom-64 bottom-2">
                    <div className="container mx-auto">
                      <About />
                    </div>
                    <div className="mt-20 mb-16 container mx-auto">
                      <Skills />
                    </div>
                  </div>
                  <img src="mars.png" className="w-full" />
                </div>
              </section>
            </div>
          </Layout>
        </section>
      ) : null}
    </div>
  );
}
