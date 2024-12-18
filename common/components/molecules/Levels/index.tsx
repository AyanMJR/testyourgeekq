"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Level } from "../Level";
import { CustomArrow } from "./CustomArrow";

export const Levels = () => {
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 768 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      customLeftArrow={
        <CustomArrow customClass="absolute z-10 left-[calc(15%+4px)]" />
      }
      customRightArrow={
        <CustomArrow customClass="absolute z-10 right-[calc(15%+4px)] rotate-180" />
      }
    >
      {Array.from({ length: 5 }).map((level, index) => (
        <Level key={index} />
      ))}
    </Carousel>
  );
};
