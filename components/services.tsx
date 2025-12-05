"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Coaching ",
      description: "Data informed strategies to maximize athletic potential and achieve peak performance",
      image: "/images/all-images/running-2.jpeg",
      bullets: [
        "Individualized training programs built around your goals, schedule, and performance metrics",
        "One-on-one coaching sessions that prioritize technique, progression, long-term development and resiliency",
        "Ongoing support and accountability to ensure your training stays consistent and meaningful"
      ]
    },
    {
      icon: Users,
      title: "Workshops",
      description: "Comprehensive tracking systems to optimize training loads and prevent injuries",
      image: "/images/all-images/texans-training-camp-2.jpeg",
      bullets: [
        "Evidence-based insights on strength training, endurance development, biomechanics, and performance monitoring",
        "Hands-on learning with demonstrations, case studies, and practical tools participants can immediately apply",
        "Customized content tailored to teams, gyms, and professional groups based on their specific learning goals",
        "Continuing education value for professionals looking to elevate their practice and stay current with modern sport science"
      ]
    },
  ]

  return (
    <motion.div {...fadeInUp}>
      <section className="w-full py-16">
        <div className="container w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Performance Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive sports science solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="">
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  {service.bullets && (
                    <ul className="flex flex-col gap-2 mb-4 text-xs md:text-sm text-muted-foreground">
                      {service.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                   <Link href="/services" className="inline-flex items-center p-0 h-auto font-normal text-primary text-sm md:text-base hover:text-primary/80 transition-colors">
                     Learn More <ChevronRight className="ml-1 h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg" className="cursor-pointer">
                View All Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
