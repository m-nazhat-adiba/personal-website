import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";
import gsap from "gsap";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const count = 200;
const particleClass = "h-1 w-1 bg-white rounded-full";
const particleColors = ["#aa00e2", "#7a169c", "#9e67b1"];

const starCount = 500;
const starClass = "h-1 w-1 rounded-full";
const starColors = ["#aa00e2", "#f0f0f0"];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

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

    for (let i = 0; i < starCount; i++) {
      star = document.createElement("div");
      star.className = starClass;
      container?.appendChild(star);
      gsap.set(star, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) - 0.75 * h,
        scale: gsap.utils.random(0.5, 2),
        backgroundColor: gsap.utils.random(starColors),
      });
      randNum = Math.random();
      if (randNum % 2) {
        blink(star);
      }
    }
  };

  const blink = (elem) => {
    gsap.to(elem, gsap.utils.random(1, 5), {
      delay: -10,
      stagger: 1,
      opacity: 0,
      ease: "power1.in",
      yoyo: true,
      repeat: -1,
      duration: 10,
    });
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
    gsap.to(elem, gsap.utils.random(1, 5), {
      x: w,
      ease: "none",
      repeat: -1,
      delay: -10,
    });
  };

  useEffect(() => {
    if (isLoading) {
      pulseRocketAnim();
      particleAnim();
    } else {
      stationaryStarAnim();
    }
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
              id="field"
              className="absolute w-full h-1/2 overflow-hidden justify-center top-0"
            ></div>
            <div className="mx-auto flex flex-col px-4 xl:px-2 w-full">
              <Header />
              <div className="relative w-full">
                <img src="mars.png" className="w-full" />
                <div className="absolute top-1/4 w-full flex">
                  <div className="container mx-auto">
                    <Works />
                  </div>
                </div>
              </div>
              <div className="bg-[#280A2D]">
                <div className="container mx-auto">
                  <About />
                  <div className="mt-20 mb-16">
                    <Skills />
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </section>
      ) : null}
    </div>
  );
}
