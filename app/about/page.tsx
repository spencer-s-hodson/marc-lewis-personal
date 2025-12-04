"use client";

import { Timeline } from "@/components/timeline";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

// Note: metadata export removed due to "use client" directive
// Add metadata in parent layout or use next/head if needed
const careerTimeline = [
  {
    year: "Present",
    title: "Co-Founder",
    organization: "Sport Science Network",
    description: [
      "Leading hub advancing sport science practice through connecting practitioners to information, people, and resources allowing them to advance their practice."
    ],
    type: "experience" as const,
    image: "/images/companies/ssn.png",
  },
  {
    year: "",
    title: "Director of Applied Sport Science",
    organization: "Houston Texans",
    description: [
      "Oversee the collection, management, and analysis of data to inform decision-making to maximize player performance and availability."
    ],
    type: "experience" as const,
    image: "/images/companies/texans.png",
  },
  {
    year: "",
    title: "Associate Director of Performance Science",
    organization: "Penn State University",
    description: [
      "Oversaw athlete monitoring initiatives, the integration of performance science initiatives into team sport, and education for best practices within sport performance."
    ],
    type: "experience" as const,
    image: "/images/companies/penn-state.png",
  },
  {
    year: "",
    title: "Director of Sport Science & Assistant Director of Strength and Conditioning",
    organization: "Virginia Tech",
    description: [
      "Served as the director of sport science and assistant director of strength and conditioning for the football program overseeing all sport science initiatives, while serving as one of the five football-only S&C coaches.",
      "Completed a PhD in exercise physiology with a plan of study developed around acquiring multidisciplinary training to obtain skills within a variety of sport performance disciplines, while serving as a graduate assistant teaching undergraduate courses in exercise physiology."
    ],
    type: "experience" as const,
    image: "/images/companies/virginia-tech.png",
  },
  {
    year: "",
    title: "Strength and Conditioning/Sport Physiology Fellow",
    organization: "U.S. Ski and Snowboard",
    description: [
      "Served as a strength and conditioning/sport physiology fellow at the U.S. Ski and Snowboard Center for Excellence."
    ],
    type: "experience" as const,
    image: "/images/companies/us-ski-snowboard.png",
  },
  {
    year: "",
    title: "Graduate Assistant",
    organization: "University of South Carolina",
    description: [
      "Completed graduate studies in applied exercise physiology under the direction of Dr. Larry Durstine, while serving as a graduate assistant teaching exercise physiology and as a sports performance intern within the athletics department.",
    ],
    type: "milestone" as const,
    image: "/images/companies/south-carolina.png",
  },
  {
    year: "",
    title: "Bachelor of Science in Health and Exercise Science",
    organization: "Wake Forest University",
    description: [
      "Completed his undergraduate studies in Health and Exercise Science, while completing honors research under the direction of Dr. Michael Berry. Lewis also served as a strength and conditioning intern and worked in the private sector as personal trainer applying what was learned in the classroom in practical application.",
    ],
    type: "milestone" as const,
    image: "/images/companies/wake-forest.png",
  },
  {
    year: "",
    title: "Airborne Infantryman",
    organization: "United States Army",
    description: [
      "Served combat rotations in support of Operation Iraqi Freedom and Operation Enduring Freedom, while earning multiple awards for service including the combat infantryman badge and the Army Commendation Medal.",
    ],
    type: "experience" as const,
    image: "/images/companies/geronimo.png",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative w-full overflow-hidden bg-gray-900">
        <div className="relative w-full">
          {/* Background Image */}
          <div className="relative w-full min-h-[700px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]">
            <Image
              src="/images/all-images/marc-headshot-texans-main.jpeg"
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center py-8">
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center ">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Dr. Marc Lewis
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Leader in Applied Sport Science, Performance, and Human Resilience
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full flex">
        <div className="mx-auto">
          {/* Section 1: Current Role */}
          <div className="py-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Professional Excellence
              </h2>

              {/* Small Screens */}
              <div className="block md:hidden">
                <div className="flex flex-col gap-4">
                  <p className="text-lg leading-relaxed">
                    Marc Lewis is a Director of Applied Sport Science in professional American football. In his current role, he oversees the collection, management, and analysis of data to inform decision-making to maximize player performance and availability.
                  </p>
                  <div className="w-full">
                    <img
                      src="/images/all-images/marc-texans-gameday.jpeg"
                      alt="Professional training environment"
                      className="w-full rounded-lg shadow-lg object-cover py-4"
                    />
                  </div>

                  <p className="text-lg leading-relaxed">
                    He has extensive experience in human performance as an applied sport and performance scientist, coach, educator, and researcher. He specializes in developing and implementing systems in stressful and time restricted environments with outcomes focused on enhancing player performance and reducing the likelihood of injury.
                  </p>
                  <div className="w-full">
                    <img
                      src="/images/all-images/texans-training-camp.jpeg"
                      alt="Professional training environment"
                      className="w-full rounded-lg shadow-lg object-cover py-4"
                    />
                  </div>
                  <p className="text-lg leading-relaxed">
                  </p>
                  <p className="text-lg leading-relaxed">
                    Aside from his current job scope, Marc serves on the National Football League's (NFL) Sports Science Advisory Board and is a member of the leadership group of the advisory board. In addition, he serves on the NFL's international team travel working group and is the sport science representative on the musculoskeletal knee task force. Moreover, he serves on the executive board of the Professional Football Performance Coaches Association (PFPCA) and is the head of the sport science subcommittee of the PFPCA.
                  </p>
                  <div className="w-full">
                    <img
                      src="/images/all-images/texans-friend.jpeg"
                      alt="Professional training environment"
                      className="w-full rounded-lg shadow-lg object-cover py-4"
                    />
                  </div>
                </div>
              </div>

              {/* Large Screens */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-4 items-start">
                  <div className="space-y-4 col-span-2">
                    <p className="text-lg leading-relaxed">
                      Marc Lewis is a Director of Applied Sport Science in professional American football. In his current role, he oversees the collection, management, and analysis of data to inform decision-making to maximize player performance and availability. He has extensive experience in human performance as an applied sport and performance scientist, coach, educator, and researcher.
                    </p>
                    <p className="text-lg leading-relaxed">
                      He has extensive experience in human performance as an applied sport and performance scientist, coach, educator, and researcher. He specializes in developing and implementing systems in stressful and time restricted environments with outcomes focused on enhancing player performance and reducing the likelihood of injury.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Aside from his current job scope, Marc serves on the National Football League's (NFL) Sports Science Advisory Board and is a member of the leadership group of the advisory board. In addition, he serves on the NFL's international team travel working group and is the sport science representative on the musculoskeletal knee task force. Moreover, he serves on the executive board of the Professional Football Performance Coaches Association (PFPCA) and is the head of the sport science subcommittee of the PFPCA.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Prior to his position in professional football, Marc served as the associate director of applied health and performance science at Penn State University. In his role, he provided support for Penn State athletics in the development of student-athlete health, well-being, and performance through facilitating collaboration between departments, overseeing the integration of monitoring and decision-making systems, and high-performance education for best practices in sport performance.
                    </p>
                  </div>
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/all-images/marc-texans-gameday.jpeg"
                      alt="Professional training environment"
                      fill
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </div>
                {/* More Images */}
                <motion.div {...fadeInUp}>
                  <div className="flex flex-row gap-4 py-4">
                    <div className="relative flex-1 h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/images/all-images/texans-training-camp.jpeg"
                        alt="Athlete training"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/images/all-images/marc-headshot-penn-state.jpeg"
                        alt="Athlete training"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 70%' }}
                      />
                    </div>
                    <div className="relative flex-1 h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/images/all-images/texans-friend.jpeg"
                        alt="Athlete training"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Academic Background */}
          <div className="mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Academic Foundation
              </h2>

              {/* Small Screens */}
              <div className="block md:hidden">
                <div className="flex flex-col gap-4 relative flex-1 rounded-lg overflow-hidden ">
                  <p className="text-lg leading-relaxed">
                    Marc earned his PhD in exercise physiology and metabolism from Virginia Tech, while creating a plan of study supporting multidisciplinary training and course work in a range of areas (which resulted in two other master degrees). He focused his research on athletic performance and recovery, and completed his dissertation entitled "Athlete Monitoring in American Football" while working full-time in athletics as the director of sport science and assistant director of strength and conditioning for the Virginia Tech football team. While at Virginia Tech, he kept one foot in the classroom/lab and one on the field/floor serving as a graduate teaching and research assistant, an applied sport scientist, and strength and conditioning coach.
                  </p>
                  <img
                    src="/images/all-images/marc-headshot-vt.jpeg"
                    alt="Penn State"
                    className="object-cover object-[center_30%]"
                  />
                  <p className="text-lg leading-relaxed">
                    He completed his undergraduate degree in health and exercise science from Wake Forest University, while completing his honors research under the direction of Dr. Michael Berry. While completing his undergraduate and graduate education, he held research positions while serving in athletics as a strength and conditioning and sports performance intern and applied sports science fellow. He is a certified performance and sport scientist (CPSS) and certified strength and conditioning specialist with distinction (CSCS, *D) through the National Strength and Conditioning Association, as well as a level 1 weightlifting coach (USAW) through the United States Weightlifting Association.
                  </p>
                </div>
              </div>

              {/* Large Screens */}
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-6 items-stretch">
                  {/* Left column - All text */}
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Marc earned his PhD in exercise physiology and metabolism from Virginia Tech, while creating a plan of study supporting multidisciplinary training and course work in a range of areas (which resulted in two other master degrees). He focused his research on athletic performance and recovery, and completed his dissertation entitled "Athlete Monitoring in American Football" while working full-time in athletics as the director of sport science and assistant director of strength and conditioning for the Virginia Tech football team. While at Virginia Tech, he kept one foot in the classroom/lab and one on the field/floor serving as a graduate teaching and research assistant, an applied sport scientist, and strength and conditioning coach.
                    </p>
                    <p className="text-lg leading-relaxed">
                      He completed his undergraduate degree in health and exercise science from Wake Forest University, while completing his honors research under the direction of Dr. Michael Berry. While completing his undergraduate and graduate education, he held research positions while serving in athletics as a strength and conditioning and sports performance intern and applied sports science fellow. He is a certified performance and sport scientist (CPSS) and certified strength and conditioning specialist with distinction (CSCS, *D) through the National Strength and Conditioning Association, as well as a level 1 weightlifting coach (USAW) through the United States Weightlifting Association.
                    </p>
                  </div>

                  {/* Right column - 2 images stacked, taking full height */}
                  <div className="flex flex-col gap-6">
                    <div className="relative flex-1 rounded-lg overflow-hidden">
                      <Image
                        src="/images/all-images/marc-headshot-vt.jpeg"
                        alt="Penn State"
                        fill
                        className="object-cover object-[center_30%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Personal Athletics & Military */}
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Athlete & Veteran
            </h2>

            {/* Small Screens */}
            <div className="block md:hidden">
              <div className="flex flex-col gap-4">
                <p className="text-lg leading-relaxed">
                  Marc is an endurance athlete and weightlifter who has competed in numerous marathons, ultramarathons, and Ironman events. Prior to starting college, Marc served as an Airborne Infantryman in the United States Army deploying on missions in support of Operation Iraqi Freedom and Operation Enduring Freedom.
                </p>
                <div className="w-full">
                  <img
                    src="/images/all-images/texans-salute.jpeg"
                    alt="Military service tribute"
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
                
                {/* Military Service Callout */}
                <div className="p-6 border-l-4 border-slate-600 bg-slate-900/30 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/companies/geronimo.png"
                        alt="Geronimo - 501st Parachute Infantry Regiment"
                        width={60}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Military Service</h3>
                      <p className="text-base">
                        Served as an Airborne Infantryman in the United States Army with combat rotations in support of Operation Iraqi Freedom and Operation Enduring Freedom. Earned multiple awards including the Combat Infantryman Badge and Army Commendation Medal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Screens */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-6 items-start">
                {/* Left column - Text content */}
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Marc is an endurance athlete and weightlifter who has competed in numerous marathons, ultramarathons, and Ironman events. Prior to starting college, Marc served as an Airborne Infantryman in the United States Army deploying on missions in support of Operation Iraqi Freedom and Operation Enduring Freedom.
                  </p>
                  
                  {/* Military Service Callout */}
                  <div className="p-6 border-l-4 border-slate-600 bg-slate-900/30 rounded-r-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/companies/geronimo.png"
                          alt="Geronimo - 501st Parachute Infantry Regiment"
                          width={60}
                          height={60}
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Military Service</h3>
                        <p className="text-base">
                          Served as an Airborne Infantryman in the United States Army with combat rotations in support of Operation Iraqi Freedom and Operation Enduring Freedom. Earned multiple awards including the Combat Infantryman Badge and Army Commendation Medal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Image */}
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/all-images/texans-salute.jpeg"
                    alt="Military service tribute"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <motion.div className="mt-16 text-center" {...fadeInUp}>
        <Link href="/contact" passHref>
          <Button variant="default" className="text-lg">
            Contact Dr. Lewis
          </Button>
        </Link>
      </motion.div>

      {/* Career Timeline Section */}
      <section className="mx-auto py-16">
        <motion.div className="mb-16 text-center" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-muted-foreground mx-auto">
            From military service to leading sport science innovation across elite organizations—a timeline of dedication, expertise, and impact.
          </p>
        </motion.div>

        <Timeline items={careerTimeline} />
      </section>
    </>
  );
}