import React from "react";
import worksData from "@/dummy_data/works";
import WorkCard from "@/components/common/cards/WorkCard";

const Works = () => {
  const chronologicData = [...worksData].reverse();

  return (
    <div className="flex flex-col gap-24 items-center md:items-start">
      <h1 className="text-4xl text-gray-400 font-semibold">
        Selected <span className="text-red-500">Works</span>
      </h1>
      <div className="flex flex-col gap-20">
        {chronologicData.map((item, key) =>
          key < 3 ? <WorkCard key={key} data={item} /> : null
        )}
      </div>
    </div>
  );
};

export default Works;
