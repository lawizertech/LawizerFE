"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scheduleCall } from "@/lib/apis/api";
import { useAuth } from "@/context/authContext";
import { Calendar } from "@/components/ui/calendar";

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
  uid: string;
  location: string | null;
  experience: string | null;
  isProfileComplete?: boolean;
  createdAt?: number;
  updatedAt?: number;
  email?: string;
  profession?: string;
  expertId: string;
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
  bookedKeys?: string[];
};

type CallType = "voice" | "video" | null;

export default function EmblaCarouselCards({
  list,
  type,
  onBook,
  bookedKeys = [],
}: CarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true })
  );
  const [localBookedKeys, setLocalBookedKeys] =
    React.useState<string[]>(bookedKeys);
  const [pendingKey, setPendingKey] = React.useState<string | null>(null);
  const [pendingExpert, setPendingExpert] = React.useState<Expert | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { isLoggedIn, setIsSignInModalOpen, user } = useAuth();
  const [callType, setCallType] = React.useState<CallType>(null);
  const [showCallTypeDialog, setShowCallTypeDialog] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 1);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 20);

  const handleBook = (key: string) => {
    setLocalBookedKeys((prev) => [...prev, key]);
    onBook(key);
  };

  const handleConfirmBooking = async () => {
    if (!pendingKey || !pendingExpert) return;

    setLoading(true);

    try {
      if (!isLoggedIn) {
        alert("Please sign in to book a call.");
        setLoading(false);
        return;
      }

      const payload = {
        userId: (user as any).uid,
        expertUid: pendingExpert.uid,
        expertId: pendingExpert.expertId,
        expertName: pendingExpert.name,
        expertType: type, // "adv" or "ca"
        callType,
        bookingDate: selectedDate?.toISOString(),
        status: "scheduled",
        rate: pendingExpert.rate || undefined,
        bookedAt: new Date().toISOString(),
      };

      await scheduleCall(payload, type as "ca" | "adv");

      handleBook(pendingKey);
      setShowConfirmDialog(false);
      setPendingKey(null);
      setPendingExpert(null);
      setCallType(null);
      setSelectedDate(undefined);
    } catch (err) {
      console.error("Error booking call:", err);
      alert("Failed to book call. Please try again.");
    } finally {
      setLoading(false);
    }
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
            const safeKey =
              expert.expertId ??
              expert.uid ??
              expert.email ??
              `${expert.name}-${i}`;
            const isBooked = localBookedKeys.includes(safeKey);

            return (
              <CarouselItem
                key={safeKey}
                className="basis-[160px] sm:basis-[180px] md:basis-[200px] lg:basis-[220px] pl-2 px-2"
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
                            setPendingKey(safeKey);
                            setPendingExpert(expert);
                            setCallType(null);
                            setShowCallTypeDialog(true);
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
      <Dialog
        open={showConfirmDialog}
        onOpenChange={(open) => {
          if (!open) {
            setShowConfirmDialog(false);
            setPendingKey(null);
          }
        }}
      >
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {isLoggedIn ? "Confirm Booking" : "Login Required"}
            </DialogTitle>

            <DialogDescription className="text-sm">
              {isLoggedIn ? (
                <>
                  Are you sure you want to book a call with{" "}
                  <span className="font-bold">{pendingExpert?.name}</span>?
                </>
              ) : (
                "Please log in first to book a call."
              )}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setPendingKey(null), setShowConfirmDialog(false);
              }}
              className="text-sm"
              disabled={loading}
            >
              Close
            </Button>

            {isLoggedIn ? (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white text-sm"
                onClick={handleConfirmBooking}
                disabled={loading}
              >
                {loading ? "Booking..." : "Yes, Book Call"}
              </Button>
            ) : (
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                onClick={() => {
                  setPendingKey(null);
                  setIsSignInModalOpen(true);
                }}
              >
                Login
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Call Type Selection Popup */}
      <Dialog
        open={showCallTypeDialog}
        onOpenChange={(open) => {
          if (!open) {
            setShowCallTypeDialog(false);
            setPendingKey(null);
          }
        }}
      >
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Select Call Type
            </DialogTitle>
            <DialogDescription className="text-sm">
              How would you like to connect with{" "}
              <span className="font-bold">{pendingExpert?.name}</span>?
            </DialogDescription>
          </DialogHeader>

          <div className="flex gap-3 justify-center mt-4">
            <Button
              className={`rounded-full px-4 ${
                callType === "voice"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCallType("voice")}
            >
              <PhoneCall className="mr-1 h-4 w-4" />
              Voice Call
            </Button>

            <Button
              className={`rounded-full px-4 ${
                callType === "video"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCallType("video")}
            >
              🎥 Video Call
            </Button>
          </div>

          {/* Date Selection */}
          <div className="mt-6 flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              fromDate={minDate}
              toDate={maxDate}
              disabled={(date) => date < minDate || date > maxDate}
              className="rounded-md border"
            />
          </div>

          <DialogFooter className="mt-6">
            <Button
              disabled={!callType || !selectedDate}
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => {
                setShowCallTypeDialog(false);
                setShowConfirmDialog(true);
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
