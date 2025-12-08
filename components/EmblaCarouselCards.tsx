"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type Expert = {
  name: string;
  role: string;
  img: string;
  gender: string;
  rate?: string;
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
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      playOnInit: true,
    })
  );

  const [bookedKey, setBookedKey] = React.useState<string | null>(null);

  // For confirmation popup
  const [pendingKey, setPendingKey] = React.useState<string | null>(null);
  const [pendingExpert, setPendingExpert] = React.useState<Expert | null>(null);

  const handleBook = (key: string) => {
    setBookedKey(key);
    onBook(key);
  };

  return (
    <>
      <Carousel
        plugins={[autoplay.current]}
        className="w-full flex justify-center"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
        onPointerDown={() => autoplay.current.stop()}
        onPointerUp={() => autoplay.current.play()}
        onDragStart={() => autoplay.current.stop()}
        onDragEnd={() => autoplay.current.play()}
      >
        <CarouselContent className="-ml-2 py-4">
          {list.map((expert, i) => {
            const key = `${type}-${i}`;
            const isBooked = bookedKey === key;

            return (
              <CarouselItem
                key={key}
                className="basis-[160px] sm:basis-[180px] md:basis-[200px] lg:basis-[220px] pl-2"
              >
                <motion.div
                  className={`rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all p-3 hover:-translate-y-1 h-92 ${
                    expert.gender === "female"
                      ? "hover:border-pink-400"
                      : "hover:border-blue-400"
                  }`}
                  animate={
                    isBooked
                      ? {
                          boxShadow: "0px 0px 15px rgba(16, 185, 129, 0.7)",
                          scale: 1.03,
                        }
                      : { boxShadow: "none", scale: 1 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative w-full h-47 rounded-xl overflow-hidden mb-2">
                    <Image
                      src={expert.img}
                      alt={expert.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div
                    className={`${
                      type === "ca" ? "h-36" : "h-28"
                    } flex flex-col justify-between `}
                  >
                    <div className="text-center space-y-1">
                      <p className="font-semibold text-gray-800 text-xs">
                        {expert.name}
                      </p>

                      <p className="text-[11px] text-gray-500">{expert.role}</p>

                      {type === "ca" && expert.rate && (
                        <p className="text-[11px] font-semibold text-green-600">
                          {expert.rate}
                        </p>
                      )}
                    </div>

                    <div className="mt-2 flex justify-center">
                      {isBooked ? (
                        <Button
                          size="sm"
                          className="rounded-full text-white text-xs px-3 py-1.5 font-medium bg-green-600 hover:bg-green-600"
                        >
                          <Check className="mr-1 h-3 w-3" />
                          Call Booked
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className={`rounded-full text-white text-xs px-3 py-1.5 font-medium ${
                            expert.gender === "female"
                              ? "bg-pink-500 hover:bg-pink-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          }`}
                          onClick={() => {
                            setPendingKey(key);
                            setPendingExpert(expert);
                          }}
                        >
                          <PhoneCall className="mr-1 h-3 w-3" />
                          Book a Call
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="hidden lg:visible">
          <CarouselPrevious />
        </div>
        <div className="hidden lg:visible">
          <CarouselNext />
        </div>
      </Carousel>

      {/* Confirmation Popup */}
      <Dialog open={!!pendingKey} onOpenChange={() => setPendingKey(null)}>
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Confirm Booking
            </DialogTitle>
            <DialogDescription className="text-sm">
              Are you sure you want to book a call with{" "}
              <span className="font-bold">{pendingExpert?.name}</span>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setPendingKey(null)}
              className="text-sm"
            >
              Cancel
            </Button>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white text-sm"
              onClick={() => {
                if (pendingKey) handleBook(pendingKey);
                setPendingKey(null);
              }}
            >
              Yes, Book Call
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
