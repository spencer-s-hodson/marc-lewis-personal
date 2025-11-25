import { Timeline } from "@/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Marc Lewis | About",
  description: "Leader in Applied Sport Science, Performance, and Human Resilience",
};

const careerTimeline = [
  {
    year: "Present",
    title: "Founder & CEO",
    organization: "Sport Science Network",
    description: "Leading a global network collaborating with teams and organizations worldwide to implement evidence-based strategies for performance optimization, injury prevention, and athlete development.",
    type: "experience" as const,
    image: "/images/companies/ssn.png",
    // Add images like this:
    // image: "/images/sport-science-network.jpg",
    // imageAlt: "Sport Science Network team",
  },
  {
    year: "2020-2023",
    title: "Director of Applied Sport Science",
    organization: "National Football League (NFL)",
    description: "Spearheaded sport science initiatives across the league, working with teams to advance performance analytics, player health monitoring, and injury prevention protocols.",
    type: "experience" as const,
    image: "/images/companies/nfl.png",
  },
  {
    year: "2018-2020",
    title: "Sports Science Consultant",
    organization: "Houston Texans",
    description: "Provided expert consultation on player performance optimization, training load management, and data-driven decision making for one of the NFL's premier franchises.",
    type: "experience" as const,
    image: "/images/companies/texans.png",
  },
  {
    year: "2015-2018",
    title: "Associate Director, Applied Health and Performance Science",
    organization: "Penn State University",
    description: "Led applied sport science programs supporting elite collegiate athletes, integrating cutting-edge research with practical performance solutions.",
    type: "experience" as const,
    image: "/images/companies/penn-state.png",
  },
  {
    year: "2012-2015",
    title: "Director of Sport Science",
    organization: "Virginia Tech",
    description: "Established and directed comprehensive sport science programs, collaborating with coaching staff to optimize athlete preparation and recovery.",
    type: "experience" as const,
    image: "/images/companies/virginia-tech.png",
  },
  {
    year: "2010",
    title: "NSCA Certifications",
    organization: "National Strength and Conditioning Association",
    description: "Earned prestigious CPSS (Certified Performance and Sport Scientist) and CSCS*D (Certified Strength and Conditioning Specialist with Distinction) certifications.",
    type: "achievement" as const,
    image: "/images/companies/nsca2.png",
  },
  {
    year: "2005-2010",
    title: "Bachelor of Science",
    organization: "Wake Forest University",
    description: "Graduated with a degree in Health and Exercise Science, building the academic foundation for a career in applied sport science and human performance.",
    type: "milestone" as const,
    image: "/images/companies/wake-forest.png",
  },
  {
    year: "2000-2005",
    title: "Airborne Infantryman",
    organization: "United States Army",
    description: "Served with distinction, developing lifelong commitment to resilience, teamwork, discipline, and service. This experience shaped leadership philosophy and dedication to human performance.",
    type: "experience" as const,
    image: "/images/companies/us-army.png",
  },
];

export default function About() {
  return (
    <>
      <section className="max-w-3xl mx-auto py-16 px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Dr. Marc Lewis
          </h1>
          <p className="text-xl text-muted-foreground">
            Leader in Applied Sport Science, Performance, and Human Resilience
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Dr. Marc Lewis is a renowned expert in the fields of applied sport science, high performance, and human resilience. With a career spanning over two decades, Dr. Lewis has worked with elite athletes, professional sports organizations, military units, and academic institutions, helping drive cutting-edge research and practical advancements in athletic performance and health.
          </p>
          <p>
            As the Founder and CEO of the <strong>Sport Science Network</strong>, Dr. Lewis collaborates with teams and organizations worldwide to implement evidence-based strategies for performance optimization, injury prevention, and athlete development. His expertise blends physiology, data analytics, and coaching insights to deliver holistic solutions for clients ranging from the NFL to the United States Army.
          </p>
          <p>
            Dr. Lewis has held influential roles such as Director of Applied Sport Science for the <strong>NFL</strong>, Sports Science Consultant to the <strong>Houston Texans</strong>, and senior leadership positions at leading universities including <strong>Penn State</strong> and <strong>Virginia Tech</strong>. His academic pedigree includes a B.S. in Health and Exercise Science from <strong>Wake Forest University</strong>, and advanced leadership certifications through the <strong>National Strength and Conditioning Association (NSCA)</strong>.
          </p>
          <p>
            Prior to his academic and professional pursuits, Dr. Lewis served as an Airborne Infantryman in the <strong>U.S. Army</strong>, where he developed his lifelong commitment to resilience, teamwork, and service. He is dedicated to mentoring the next generation of sport scientists, coaches, and leaders, sharing his knowledge through teaching, consulting, and public speaking engagements.
          </p>
          <p>
            Dr. Lewis continually pushes the boundaries of what’s possible in human performance, committed to evidence-based innovation and elevating those around him.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Selected Experience</h2>
          <ul className="space-y-2 text-base list-disc list-inside">
            <li>Founder &amp; CEO, Sport Science Network</li>
            <li>Director of Applied Sport Science, NFL</li>
            <li>Sports Science Consultant, Houston Texans</li>
            <li>Associate Director, Applied Health and Performance Science, Penn State University</li>
            <li>Director of Sport Science, Virginia Tech</li>
            <li>Airborne Infantryman, U.S. Army</li>
            <li>NSCA CPSS &amp; CSCS*D</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition"
          >
            Contact Dr. Lewis
          </a>
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