import React from "react";
import worksData from "@/dummy_data/works";
import WorkCard from "@/components/cards/WorkCard";

const Works = () => {
  return (
    <div className="flex flex-col gap-24 items-center md:items-start">
      <h1 className="text-4xl text-gray-400 font-semibold">
        Selected <span className="text-red-500">Works</span>
      </h1>
      <div className="flex flex-col gap-20">
        {worksData.map((item, key) => (
          <WorkCard key={key} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
