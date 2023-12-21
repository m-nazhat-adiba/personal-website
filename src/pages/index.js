import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";
import gsap from "gsap";
import { useEffect, useState } from "react";

const count = 200;
const particleClass = "h-1 w-1 bg-white rounded-full";
const particleColors = ["#aa00e2", "#7a169c", "#9e67b1"];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const nextLoad = () => {
    rocketOutAnim();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // setIsLoading(false);
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

  useEffect(() => {
    pulseRocketAnim();
    particleAnim();
  }, [isLoading]);

  const anim = (elem, w) => {
    gsap.to(elem, gsap.utils.random(5, 10), {
      x: w,
      ease: "none",
      repeat: -1,
      delay: -10,
    });
  };
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
      ) : (
        <section className="bg-gradient-to-r from-[rgb(0,0,0)_0%] to-[rgba(86,28,110,0.5)_90%]">
          <Layout>
            <Header />
            <div className="container mx-auto flex flex-col gap-24 px-4 xl:px-2 w-full">
              <About />
              <Works />
              <div className="mt-20 mb-16">
                <Skills />
              </div>
            </div>
          </Layout>
        </section>
      )}
    </div>
  );
}
