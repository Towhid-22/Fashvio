"use client";
import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Link from "next/link";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    function getBanner() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/banner/get-banner`)
        .then((res) => {
          setBanners(res.data.data);
        });
    }
    getBanner();
  }, []);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mx-auto max-w-[1580px] px-4 flex items-center justify-center shrink"
    >
      <CarouselContent>
        {banners.map((item, index) => (
          <CarouselItem key={index} className="w-full">
            <Link href={`/${item.href}`}>
              <div className="py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 lg:h-[600px] object-contain rounded-[5px]"
                />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Banner;
