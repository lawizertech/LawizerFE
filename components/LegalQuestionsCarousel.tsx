"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type LegalCard = {
  icon: any;
  question?: string;
  image?: string;
  color?: string;
};

type Props = {
  list: LegalCard[];
};

export default function LegalQuestionsCarousel({ list }: Props) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2200,
      stopOnInteraction: false,
      playOnInit: true,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
      onPointerDown={() => autoplay.current.stop()}
      onPointerUp={() => autoplay.current.play()}
      onDragStart={() => autoplay.current.stop()}
      onDragEnd={() => autoplay.current.play()}
    >
      <CarouselContent className="-ml-3">
        {list.map((item, i) => {
          const Icon = item.icon;

          return (
            <CarouselItem
              key={i}
              className="basis-[240px] sm:basis-[260px] md:basis-[280px] lg:basis-[300px] pl-3 "
            >
              <div className="rounded-2xl border border-blue-100 bg-white shadow-md hover:shadow-xl transition-all p-5 hover:-translate-y-1 h-[360px]">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 leading-snug min-h-[52px]">
                  {item.question}
                </h3>

                {/* Image */}
                {item.image && (
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mt-4">
                    <Image
                      src={item.image}
                      alt={item.question || "legal question"}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
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
