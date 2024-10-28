import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 py-48">
      <Image
        src="/photo.png"
        alt="photo"
        width={300}
        height={300}
        className="h-auto w-36 rounded-full"
      />
      <h1 className="text-center text-xl md:text-3xl">
        &quot;Hi there, I&apos;m{' '}
        <span className="font-medium">Nazhat Adiba</span>, a
        <span className="font-medium"> Front-End Developer</span> with a knack
        for crafting delightful web interfaces. My goal is to blend creativity
        and code to make user-friendly websites. Eager to dive into web
        development and contribute to innovative projects.&quot;
      </h1>
    </div>
  );
};

export default About;
