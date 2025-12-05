"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

export default function Hero() {
  return (
    <motion.div {...fadeInUp}>
      <section className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[950px] overflow-hidden">
        {/* Background Images */}
        <div className="grid grid-cols-2 absolute inset-0 flex">
          <div className="relative h-full">
            <Image
              src="/images/transparent/running-transparent.png"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative h-full">
            <Image
              src="/images/transparent/marc-headshot-penn-state-transparent.png"
              alt="Background"
              fill
              className="object-contain object-top"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-[600px] md:min-h-[700px]">
          <Badge className="mb-4" variant="default">
            Performance Specialist
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            Where Science Meets Performance
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="default">
              <Link href="/services">View Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
