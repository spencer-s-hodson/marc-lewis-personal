"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";
import { PodcastCard, ArticleCard, OtherMediaCard } from "@/components/media-cards";

export default function Media() {
  const mediaSamples = {
    podcast: {
      title: "Iron Culture Podcast",
      episode: "Ep 344 - Sports Science In Elite Athletics (ft. Dr. Marc Lewis)",
      description: "Dr. Lewis discusses sports science applications in elite athletics.",
      image: "/images/podcasts/iron-culture.jpg",
      links: [
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=IXd0-4jHfzs", icon: "▶️" },
        { platform: "Spotify", url: "https://creators.spotify.com/pod/profile/massresearchreview/episodes/Ep-344---Sports-Science-In-Elite-Athletics-ft--Dr--Marc-Lewis-e37rej4", icon: "🎧" },
      ],
    },
    article: {
      title: "Which tool or piece of equipment has provided you with the highest return on investment over the past 12 months?",
      publication: "Sportsmith",
      description: "Expert insights on cost-effective equipment and tools for high-performance training environments.",
      link: "https://www.sportsmith.co/articles/which-tool-or-piece-of-equipment-has-provided-you-with-the-highest-return-on-investment-over-the-past-12-months/",
      type: "article",
      image: "/images/articles/sportsmith1.webp",
    },
    otherMedia: {
      title: "Sport Science Handbook",
      description: "Comprehensive guide for evidence-based decision-making in sport science.",
      link: "https://www.sportsmith.co/profile/marc-lewis/",
      image: "/images/other-media/ssh-cover.jpg",
      type: "Resource",
    },
  }
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
              <PodcastCard podcast={mediaSamples.podcast} />
              <ArticleCard article={mediaSamples.article} />
              <OtherMediaCard otherMedia={mediaSamples.otherMedia} />
            </div>

            <div className="text-center mt-8">
              <Link href="/media">
                <Button className="cursor-pointer" variant="outline" size="lg">
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