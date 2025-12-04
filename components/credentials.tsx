"use client";

import { Award, TrendingUp, Users, BookOpen, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import WorkExperienceSlider from "./work-experience-slider";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

export default function Credentials() {
  return (
    <>
      <motion.section {...fadeInUp} className="w-full py-8 pt-16">
        <div className="container w-full">
          <div className="w-full ">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Human Performance Specialist
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With a Ph.D. in exercise physiology and extensive experience spanning collegiate athletics,
                  research, and military service, Dr. Lewis brings unparalleled expertise to sports science,
                  fitness, and wellness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His approach combines scientific rigor with practical application, helping athletes and
                  organizations achieve peak performance through evidence-based strategies.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-6">
                </div> */}
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-4">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">Ph.D.</div>
                  <div className="text-sm text-muted-foreground">Exercise Physiology</div>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Athletes Coached</div>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-muted-foreground">Articles, Presentations, and Publications</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <WorkExperienceSlider />

      <motion.div {...fadeInUp} className="mb-4">
        <Link className="flex justify-center mt-8" href="/about">
          <Button>
            Learn More About Dr. Lewis
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </>
  );
}

