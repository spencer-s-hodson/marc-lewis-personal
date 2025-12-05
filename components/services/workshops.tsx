import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Workshops() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Workshops & Sport Performance Education</h2>

      {/* Text Block */}
      <div className="mb-8">
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          Marc Lewis offers applied sport performance workshops designed for coaches, trainers, clinicians, and organizations seeking high-quality professional development. Drawing on his background as a sport scientist and high-performance specialist, Marc delivers clear, practical education that bridges the gap between research and real-world application.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          His workshops provide:
        </p>
        <ul className="mb-6 ml-6 md:ml-8 space-y-2 text-base md:text-lg leading-relaxed list-disc">
          <li>Evidence-based insights on strength training, endurance development, biomechanics, and performance monitoring</li>
          <li>Hands-on learning with demonstrations, case studies, and practical tools participants can immediately apply</li>
          <li>Customized content tailored to teams, gyms, and professional groups based on their specific learning goals</li>
          <li>Continuing education value for professionals looking to elevate their practice and stay current with modern sport science</li>
        </ul>
      </div>

      {/* Magazine-Style Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
        {/* Large Featured Image - Takes 2 columns on desktop */}
        <div className="md:col-span-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/boise-state-peers.jpeg"
            alt="Professional workshop setting"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column - Two Stacked Images */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/texans-training-camp-2.jpeg"
              alt="Training camp session"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/tennessee-titans.jpeg"
              alt="Professional development"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <p className="text-base md:text-lg leading-relaxed mb-8">
        Whether delivered in person or virtually, Marc's workshops help professionals deepen their understanding of performance principles, improve coaching effectiveness, and bring a more scientific, intentional approach to athlete development.
      </p>

      {/* CTA Section with Background Image */}
      <section className="relative w-full overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="md:col-span-2 relative min-h-[700px] md:min-h-[800px] lg:min-h-[900px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/marc-texans-gameday-2.jpeg"
            alt="Join our professional workshops"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CTA Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-8 md:py-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
            Elevate Your Coaching Practice
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
            Join our professional development workshops and bring evidence-based science to your athletes
          </p>
          <Link href="/contact">
            <Button className="cursor-pointer text-base md:text-lg px-6 md:px-8">
              Inquire About Workshops
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
}