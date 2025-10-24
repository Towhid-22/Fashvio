"use client";
import * as React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { banners } from "../../../public";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="container flex items-center justify-center"
    >
      <CarouselContent>
        {banners.map((item, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="py-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 lg:h-[600px] rounded-[5px]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Banner;
