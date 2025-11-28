import Coaching from "@/components/services/coaching";
import Workshops from "@/components/services/workshops";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Evidence-based coaching and professional development tailored to your goals",
};

export default function Services() {
  return (
    <Tabs defaultValue="coaching" className="w-full">
      {/* Header Section */}
      <section className="relative w-full overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="relative w-full">
          <Image
            src="/images/all-images/texans-training-camp-4.jpeg"
            alt="Services header"
            width={2000}
            height={500}
            className="w-full h-auto"
            priority
          />
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
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger value="coaching" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">
              Coaching
            </TabsTrigger>
            <TabsTrigger value="workshops" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">
              Workshops
            </TabsTrigger>
          </TabsList>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto py-16">
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
