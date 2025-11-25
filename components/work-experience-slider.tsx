"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const workExperience = [
  {
    organization: "Sport Science Network",
    logo: "/images/companies/ssn.png",
    alt: "Sport Science Network logo",
    role: "Founder & CEO"
  },
  {
    organization: "Houston Texans",
    logo: "/images/companies/texans.png",
    alt: "Houston Texans logo",
    role: "Sports Science Consultant"
  },
  {
    organization: "NFL",
    logo: "/images/companies/nfl.png",
    alt: "NFL logo",
    role: "Director of Applied Sport Science"
  },
  {
    organization: "Penn State University",
    logo: "/images/companies/penn-state.png",
    alt: "Penn State University logo",
    role: "Associate Director of Applied Health and Performance Science"
  },
  {
    organization: "Virginia Tech",
    logo: "/images/companies/virginia-tech.png",
    alt: "Virginia Tech logo",
    role: "Director of Sport Science & Assistant Director of Strength and Conditioning"
  },
  {
    organization: "Wake Forest University",
    logo: "/images/companies/wake-forest.png",
    alt: "Wake Forest University logo",
    role: "B.S. in Health and Exercise Science"
  },
  {
    organization: "NSCA",
    logo: "/images/companies/nsca2.png",
    alt: "National Strength and Conditioning Association logo",
    role: "CPSS & CSCS*D"
  },
  {
    organization: "U.S. Army",
    logo: "/images/companies/us-army.png",
    alt: "United States Army logo",
    role: "Airborne Infantryman"
  }
];

export default function WorkExperienceSlider() {
  return (
    <section className="w-full py-16 bg-muted/30 overflow-hidden">
      <div className="container w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Trusted By Market Leaders
        </h2>
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {workExperience.map((experience, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <img
                src={experience.logo}
                alt={experience.alt}
                className={`h-30 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 ${
                  experience.logo.includes('nsca') ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

