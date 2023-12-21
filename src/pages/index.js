import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";
import gsap from "gsap";
import { useEffect } from "react";

const count = 500;
const particleClass = "h-1 w-1 bg-white rounded-full";
const particleColors = ["#aa00e2", "#7a169c", "#9e67b1"];

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("container");
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    let elem;

    for (let i = 0; i < count; i++) {
      elem = document.createElement("div");
      elem.className = particleClass;
      container.appendChild(elem);
      gsap.set(elem, {
        x: gsap.utils.random(0, w) - w,
        y: gsap.utils.random(0, h),
        scale: gsap.utils.random(0.5, 1),
        backgroundColor: gsap.utils.random(particleColors),
      });
      anim(elem, w);
    }
  }, []);

  const anim = (elem, w) => {
    gsap.to(elem, gsap.utils.random(8, 10), {
      x: w,
      ease: "none",
      repeat: -1,
      delay: -10,
    });
  };
  return (
    <div className=" w-full h-full relative">
      <div
        id="container"
        className="absolute w-full h-full overflow-hidden flex flex-col justify-center top-0 bg-gradient-to-r from-[rgb(0,0,0)_0%] to-[rgba(86,28,110,0.5)_90%] -z-10"
      ></div>
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
    </div>
  );
}
