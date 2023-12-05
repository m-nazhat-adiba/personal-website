import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const WorkCardNext = ({ data }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{data.title}</h4>
        <p className="text-tiny uppercase font-bold">{data.desc}</p>
        <small className="text-default-500">{data.tags}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.src}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default WorkCardNext;
