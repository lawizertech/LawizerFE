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
import { useRouter } from "next/navigation";

type LegalCard = {
  icon: any;
  question?: string;
  image?: string;
  color?: string;
  route: string;
};

type Props = {
  list: LegalCard[];
};

export default function LegalQuestionsCarousel({ list }: Props) {
  const router = useRouter();
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
              className="
          basis-[180px] sm:basis-[220px] md:basis-[260px] lg:basis-[300px] 
          pl-3
        "
              onClick={() => {
                if (item.route.startsWith("http")) {
                  window.open(item.route, "_blank", "noopener,noreferrer");
                } else {
                  router.push(item.route);
                }
              }}
            >
              <div
                className="
          rounded-2xl border border-blue-100 bg-white shadow-md hover:shadow-xl transition-all
          p-3 sm:p-4 md:p-5 hover:-translate-y-1
          h-[280px] sm:h-[320px] md:h-[340px] lg:h-[360px]
        "
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 leading-snug min-h-[48px] sm:min-h-[52px]">
                  {item.question}
                </h3>

                {/* Image */}
                {item.image && (
                  <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 rounded-xl overflow-hidden mt-3 sm:mt-4">
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
