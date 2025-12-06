"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah John",
      location: "Kochi",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
      text: "I received a hefty traffic challan for a violation I didn't commit. I had no idea how to contest it without visiting the court multiple times. Lawizer’s Traffic Challan Instant Help is brilliant. I just submitted the details, and their experts handled the dispute process entirely online. It was stress-free, and I didn't have to leave my office. Their communication is transparent and quick.",
    },
    {
      name: "Vikram Sethi",
      location: "Chennai",
      avatar: "/professional-man.jpg",
      rating: 5,
      text: "As a new founder, I was overwhelmed by vendor contracts and compliance. Local lawyers were quoting exorbitant fees. Lawizer was a game-changer. I uploaded my documents, and their corporate team reviewed them within 24 hours. The comments were precise and saved me from a risky clause. Highly recommended for startups seeking affordable legal safety.",
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      avatar: "/confident-business-woman.png",
      rating: 5,
      text: "Going through a divorce is mentally draining. I needed clarity regarding child custody before hiring an attorney. Lawizer’s First Free Consultation was genuinely useful. The lawyer was empathetic, listened to my situation, and gave me a clear roadmap. It gave me confidence to move forward. Thank you for making legal help accessible.",
    },
    {
      name: "David D’Souza",
      location: "Goa",
      avatar: "/professional-man-2.jpg",
      rating: 5,
      text: "An e-commerce giant refused to refund my money for a defective laptop. Lawizer helped me draft and send a strong legal notice. The next week, the company processed my refund! The dashboard kept me updated at every step. It feels empowering to have such reliable legal backup.",
    },
    {
      name: "Priya Desai",
      location: "Mumbai",
      avatar: "/professional-woman-2.png",
      rating: 5,
      text: "I was travelling late at night when the cab driver started acting weird. I got scared and pressed the Emergency SOS on Lawizer. A legal expert immediately came on the line and spoke to the driver sternly. Instant relief mil gaya. The Women Help feature is a genuine lifesaver for working women like me.",
    },
    {
      name: "Rajesh Kumar",
      location: "Noida",
      avatar: "/professional-man-3.jpg",
      rating: 5,
      text: "My tenant refused to pay rent and wouldn’t vacate. Lawizer se legal notice bheja, and magic ho gaya — the tenant vacated within a week. The team updated me on WhatsApp throughout. Ghar baithe kaam ho gaya without any court hassle. Super smooth experience.",
    },
    {
      name: "Amit Bansal",
      location: "Surat",
      avatar: "/business-man-1.jpg",
      rating: 5,
      text: "A client gave me a cheque that bounced and started avoiding my calls. Lawizer helped me file the case quickly. Their dashboard is transparent and efficient. Because of their fast legal action, the client settled the amount out of court. A must-have for small business owners.",
    },
    {
      name: "Karthik Nair",
      location: "Bangalore",
      avatar: "/professional-man-4.jpg",
      rating: 5,
      text: "My company fired me without notice pay and I panicked. I tried Lawizer’s First Free Consultation. The lawyer told me exactly which laws protect me. Bahut confidence mila. I sent a mail based on their advice, and HR cleared my dues immediately. Very practical and helpful guidance.",
    },
    {
      name: "Rohan Mehra",
      location: "Indore",
      avatar: "/professional-man-5.jpg",
      rating: 5,
      text: "Cops stopped me on a road trip and asked for a bribe. I pressed the Emergency SOS on Lawizer. A lawyer spoke to them on speaker and clarified the rules. They let me go instantly. Bilkul filmy scene tha! It’s like having a lawyer friend in your pocket.",
    },
    {
      name: "Ananya Roy",
      location: "Kolkata",
      avatar: "/professional-woman-3.png",
      rating: 5,
      text: "I lost money in a UPI scam and didn't know how to approach the cyber cell. Lawizer guided me step-by-step and helped draft the complaint properly. Their response time is amazing. If you're stuck in any legal issue, Lawizer is super reliable.",
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

        {/* Infinite Scroll Wrapper */}
        <div className="overflow-hidden w-full">
          <div className="scroll-wrapper">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg flex flex-col w-72 mx-4 flex-shrink-0"
              >
                <CardContent className="pt-6 flex flex-col flex-grow">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      {/* <AvatarImage src={testimonial.avatar} /> */}
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mt-auto">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-accent-brand fill-accent-brand"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
