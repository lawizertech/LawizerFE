"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
      text: "Lawizer made getting legal help so easy. I connected with an attorney within minutes who helped me understand my options clearly. The platform is intuitive and the lawyers are top-notch. Highly recommend for anyone needing quick legal guidance.",
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      avatar: "/professional-man.jpg",
      rating: 5,
      text: "The legal advice I received was straightforward and easy to understand. Lawizer has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help.",
    },
    {
      name: "Emily Rodriguez",
      location: "Austin, TX",
      avatar: "/confident-business-woman.png",
      rating: 5,
      text: "The attorney I connected with on Lawizer was incredibly helpful, clearing up many doubts I had. They offered solutions and insights into issues that were affecting my business. I've had such a positive experience that I wouldn't hesitate to recommend Lawizer to others.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg flex flex-col h-full"
            >
              <CardContent className="pt-6 flex flex-col flex-grow">
                {/* Avatar & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mt-auto">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-accent-brand fill-accent-brand"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
