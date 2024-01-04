"use client";
import { Movie } from "@/typings";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { moviesData } from "@/app/data/movies";
Autoplay.globalOptions = { delay: 8000 };
const CarouselBanner = ({ movies }: { movies: Movie[] }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, duration: 100 },
    [Autoplay()]
  );
  return (
    <div
      className="overflow-hidden lg:-mt-10 relative cursor-pointer"
      ref={emblaRef}
    >
      CarouselBanner
      <div className="flex">
        {moviesData.map((movie) => (
          <div className="flex-full  min-w-0 relative " key={movie.id}>
            <Image
              key={movie.id}
              src={movie.image}
              alt=""
              width={1920}
              height={1080}
    
            objectFit="cover" 
            />
            <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent">
              <h2 className="text-5xl font-bold max-w-xl z-50">{movie.name}</h2>
              <p className="max-w-xl line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, optio ea! Labore eligendi deserunt laboriosam
                doloremque repellat, beatae reiciendis ex.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"/>
    </div>
  );
};

export default CarouselBanner;
