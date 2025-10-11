"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{testimonial.text}</p>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-brand fill-accent-brand" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
