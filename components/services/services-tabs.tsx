"use client";

import Coaching from "@/components/services/coaching";
import Workshops from "@/components/services/workshops";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ServicesTabs() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    // Smooth scroll to content section when tab changes
    // Small delay to ensure content is rendered before scrolling
    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <Tabs className="w-full" onValueChange={handleTabChange} value={selectedTab || undefined}>
      {/* Header Section */}
      <section className="relative w-full overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="relative w-full">
          {/* Background Image */}
          <div className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[950px]">
            <Image
              src="/images/all-images/texans-training-camp-4.jpeg"
              alt="Services header"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-6 md:mb-8 px-4">
            Evidence-based coaching and professional development tailored to your goals
          </p>

          {/* Tabs in Header */}
          <TabsList className="bg-white/10 backdrop-blur-lg border border-white/20">
            <TabsTrigger
              value="coaching"
              className="cursor-pointer data-[state=active]:bg-white data-[state=active]:text-black text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Coaching
            </TabsTrigger>
            <TabsTrigger
              value="workshops"
              className="cursor-pointer data-[state=active]:bg-white data-[state=active]:text-black text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Workshops
            </TabsTrigger>
          </TabsList>
        </div>
      </section>

      {/* Content Section */}
      <div ref={contentRef} className="container mx-auto py-16">
        <TabsContent value="coaching">
          <Coaching />
        </TabsContent>
        <TabsContent value="workshops">
          <Workshops />
        </TabsContent>
      </div>
    </Tabs>
  );
}

