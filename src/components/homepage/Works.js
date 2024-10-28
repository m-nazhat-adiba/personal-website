import React from 'react';
import worksData from '@/dummy_data/works';
import WorkCard from '@/components/common/cards/WorkCard';

const Works = () => {
  const chronologicData = [...worksData].reverse();

  return (
    <div className="flex flex-col items-center gap-24 md:items-start">
      <h1 className="text-4xl font-semibold text-gray-400">
        Selected <span className="text-red-500">Works</span>
      </h1>
      <div className="flex flex-col gap-20">
        {chronologicData.map((item, key) =>
          key < 3 ? <WorkCard key={key} data={item} /> : null,
        )}
      </div>
    </div>
  );
};

export default Works;
