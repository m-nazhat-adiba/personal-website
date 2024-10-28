import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const WorkCardNext = ({ data }) => {
  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">{data.title}</h4>
        <p className="text-tiny font-bold uppercase">{data.desc}</p>
        <small className="text-default-500">{data.tags}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src={data.src}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default WorkCardNext;
