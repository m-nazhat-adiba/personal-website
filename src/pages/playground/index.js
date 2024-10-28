import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';

const Playground = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray('section').forEach((section, i) => {
      const test = section.querySelector('#test');
      ScrollTrigger.create({
        trigger: section,
        pin: true,
        pinSpacing: !!test,
        markers: { indent: 150 * i },
        id: 'pin' + (i + 1),
      });
    });
  }, []);
  return (
    <main className="flex h-full w-screen max-w-[100vw] flex-col">
      <section
        id="section_1"
        className="flex min-h-[100vh] flex-col items-center justify-center bg-black p-[15px]"
      >
        <h1>Section 1</h1>
      </section>
      <section
        id="section_2"
        className="flex min-h-[100vh] w-full items-center justify-center bg-fuchsia-700 p-[15px]"
      >
        <div
          id="test"
          className="flex h-1/2 w-screen items-center justify-center bg-green-700"
        >
          Test
        </div>
        <div
          id="test"
          className="flex h-1/2 w-screen items-center justify-center bg-green-400"
        >
          Test
        </div>
      </section>
      <section
        id="section_3"
        className="flex min-h-[100vh] flex-col items-center justify-center bg-blue-800 p-[15px]"
      >
        <h1>Section 3</h1>
      </section>
    </main>
  );
};

export default Playground;
