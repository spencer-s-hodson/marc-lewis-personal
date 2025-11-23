"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full">
          <Image
            src="/images/marc-lewis-running.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-1/2 h-full">
          <Image
            src="/images/marc-lewis-texans.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <Badge className="mb-4" variant="default">
          Performance Specialist
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Coaching, Workshops & More
        </h1>
        {/* <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl">
          Dr. Marc Lewis is a leading expert in applied sports science, specializing in performance optimization, athlete monitoring, and strength and conditioning. He integrates cutting-edge research with practical strategies to enhance athletic performance and recovery. With a Ph.D. in exercise physiology and a background spanning collegiate athletics, research, and military service, Dr. Lewis brings a data-driven approach to sports science, fitness, and wellness.
        </p> */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" variant="default">
            <a href="/services">View Services</a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
