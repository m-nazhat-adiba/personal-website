import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center py-48">
      <Image
        src="/photo.png"
        alt="photo"
        width={300}
        height={300}
        className="rounded-full w-36 h-auto"
      />
      <h1 className="md:text-3xl text-xl text-center">
        &quot;Hi there, I&apos;m{" "}
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
