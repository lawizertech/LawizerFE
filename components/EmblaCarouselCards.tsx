"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Expert = {
  name: string;
  role: string;
  rate: string;
  img: string;
  gender: string;
};

type CarouselProps = {
  list: Expert[];
  type: string; // adv | ca
  onBook: (key: string) => void;
};

export default function EmblaCarouselCards({
  list,
  type,
  onBook,
}: CarouselProps) {
  // create plugin once
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      playOnInit: true,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full"
      // Stop when user hovers
      onMouseEnter={() => autoplay.current.stop()}
      // Resume when hover ends
      onMouseLeave={() => autoplay.current.play()}
      // Stop when user starts dragging or selecting
      onPointerDown={() => autoplay.current.stop()}
      onPointerUp={() => autoplay.current.play()}
      // Just to be safe also hook into Embla drag events
      onDragStart={() => autoplay.current.stop()}
      onDragEnd={() => autoplay.current.play()}
    >
      <CarouselContent className="-ml-2">
        {list.map((expert, i) => {
          const key = `${type}-${i}`;

          return (
            <CarouselItem
              key={key}
              className="basis-[160px] sm:basis-[180px] md:basis-[200px] lg:basis-[220px] pl-2"
            >
              <div
                className={`rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all p-3 hover:-translate-y-1 ${
                  expert.gender === "female"
                    ? "hover:border-pink-400"
                    : "hover:border-blue-400"
                }`}
              >
                <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2">
                  <Image
                    src={expert.img}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-800 text-xs">
                    {expert.name}
                  </p>
                  <p className="text-[11px] text-gray-500">{expert.role}</p>
                  <p className="text-sm font-medium text-gray-700">
                    {expert.rate}
                  </p>
                </div>

                <div className="mt-2 flex justify-center">
                  <Button
                    size="sm"
                    className={`rounded-full text-white text-xs px-3 py-1.5 font-medium ${
                      expert.gender === "female"
                        ? "bg-pink-500 hover:bg-pink-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => onBook(key)}
                  >
                    <PhoneCall className="mr-1 h-3 w-3" />
                    Book a Call
                  </Button>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
