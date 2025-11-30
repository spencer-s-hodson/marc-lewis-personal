"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const workExperience = [
  {
    organization: "Sport Science Network",
    logo: "/images/companies/ssn-white.png",
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
    organization: "U.S. Ski and Snowboard",
    logo: "/images/companies/us-ski-snowboard.png",
    alt: "U.S. Ski and Snowboard logo",
    role: "Strength and Conditioning/Sport Physiology Fellow"
  },
  {
    organization: "University of South Carolina",
    logo: "/images/companies/south-carolina.png",
    alt: "University of South Carolina logo",
    role: "Graduate Assistant"
  },
  {
    organization: "Wake Forest University",
    logo: "/images/companies/wake-forest.png",
    alt: "Wake Forest University logo",
    role: "B.S. in Health and Exercise Science"
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
    <section className="w-full py-16 overflow-hidden">
      <div className="container w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proven Track Record Across Elite Teams & Institutions
        </h2>
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          {workExperience.map((experience, index) => (
            <div key={index} className="mx-8 flex items-center justify-center py-2 md:py-4">
              <img
                src={experience.logo}
                alt={experience.alt}
                className="h-18 md:h-30 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] brightness-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

