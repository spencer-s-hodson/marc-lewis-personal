"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

export default function Media() {
  const mediaSamples = [
    {
      title: "Iron Culture Podcast",
      description: "Dr. Lewis discusses sports science applications in elite athletics.",
      image: "/images/podcasts/iron-culture.jpg",
      mediaType: "podcast",
    },
    {
      title: "Which tool or piece of equipment has provided you with the highest return on investment over the past 12 months?",
      description: "Expert insights on cost-effective equipment and tools for high-performance training environments.",
      image: "/images/articles/sportsmith1.webp",
      mediaType: "article",
    },
    {
      title: "Dietary Nitrate Supplementation Improves Exercise Performance and Decreases Blood Pressure in COPD Patients",
      description: "Research study examining the effects of nitrate supplementation on exercise capacity and cardiovascular health.",
      image: "/images/articles/dietary-nitrate-supplementation.jpg",
      mediaType: "research",
    },
  ];
  return (
    <>
      {/* Media Preview */}
      <motion.section {...fadeInUp} className="w-full py-16 from-primary/10 via-secondary/10 to-transparent">
        <div className="container px-4">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Media & Insights
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Latest podcasts, videos, and thought leadership in sports science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaSamples.map((sample) => (
                <Link href="/media" key={sample.title} className="h-full">
                  <Card className="cursor-pointer overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative aspect-video">
                      <Image
                        src={sample.image}
                        alt={sample.title}
                        fill
                        className="object-contain transition-transform duration-500"
                        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{sample.mediaType}</Badge>
                      <CardTitle className="text-lg">{sample.title}</CardTitle>
                      <CardDescription>
                        {sample.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/media">
                <Button variant="outline" size="lg">
                  View All Media
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
};