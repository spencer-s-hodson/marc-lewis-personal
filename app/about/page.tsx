import { Timeline } from "@/components/timeline";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dr. Marc Lewis's career journey, experience in sport science, and commitment to human performance excellence.",
};

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
    image: "/images/companies/us-army.png",
  },
];

export default function About() {
  return (
    <>
      <section className="w-full py-16 px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Dr. Marc Lewis
          </h1>
          <p className="text-xl text-muted-foreground">
            Leader in Applied Sport Science, Performance, and Human Resilience
          </p>
        </div>
        <Image className="mb-8" src="/images/all-images/marc-headshot-texans-main.jpeg" alt="Dr. Marc Lewis" width={1000} height={1000} />
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Marc Lewis is a Director of Applied Sport Science in professional American football. In his current role, he oversees the collection, management, and analysis of data to inform decision-making to maximize player performance and availability. He has extensive experience in human performance as an applied sport and performance scientist, coach, educator, and researcher. He specializes in developing and implementing systems in stressful and time restricted environments with outcomes focused on enhancing player performance and reducing the likelihood of injury.
          </p>
          <p>
            Aside from his current job scope, Marc serves on the National Football League's (NFL) Sports Science Advisory Board and is a member of the leadership group of the advisory board. In addition, he serves on the NFL's international team travel working group and is the sport science representative on the musculoskeletal knee task force. Moreover, he serves on the executive board of the Professional Football Performance Coaches Association (PFPCA) and is the head of the sport science subcommittee of the PFPCA.
          </p>
          <p>
            Prior to his position in professional football, Marc served as the associate director of applied health and performance science at Penn State University. In his role, he provided support for Penn State athletics in the development of student-athlete health, well-being, and performance through facilitating collaboration between departments, overseeing the integration of monitoring and decision-making systems, and high-performance education for best practices in sport performance.
          </p>
          <p>
            Marc earned his PhD in exercise physiology and metabolism from Virginia Tech, while creating a plan of study supporting multidisciplinary training and course work in a range of areas (which resulted in two other master degrees). He focused his research on athletic performance and recovery, and completed his dissertation entitled "Athlete Monitoring in American Football" while working full-time in athletics as the director of sport science and assistant director of strength and conditioning for the Virginia Tech football team. While at Virginia Tech, he kept one foot in the classroom/lab and one on the field/floor serving as a graduate teaching and research assistant, an applied sport scientist, and strength and conditioning coach.
          </p>
          <p>
            He completed his undergraduate degree in health and exercise science from Wake Forest University, while completing his honors research under the direction of Dr. Michael Berry. While completing his undergraduate and graduate education, he held research positions while serving in athletics as a strength and conditioning and sports performance intern and applied sports science fellow. He is a certified performance and sport scientist (CPSS) and certified strength and conditioning specialist with distinction (CSCS, *D) through the National Strength and Conditioning Association, as well as a level 1 weightlifting coach (USAW) through the United States Weightlifting Association.
          </p>
          <p>
            Marc is an endurance athlete and weightlifter who has competed in numerous marathons, ultramarathons, and Ironman events. Prior to starting college, Marc served as an Airborne Infantryman in the United States Army deploying on missions in support of Operation Iraqi Freedom and Operation Enduring Freedom.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact" passHref>
            <Button variant="default" className="px-8 text-lg">
              Contact Dr. Lewis
            </Button>
          </Link>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From military service to leading sport science innovation across elite organizations—a timeline of dedication, expertise, and impact.
          </p>
        </div>

        <Timeline items={careerTimeline} />
      </section>
    </>
  );
}