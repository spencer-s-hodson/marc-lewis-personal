import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Coaching() {
  return (
    <section className="mb-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Coaching</h1>

      {/* Text Block */}
      <div className="mb-8">
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          Marc Lewis is a an applied sport scientist and high-performance coach dedicated to helping athletes and driven individuals train with purpose. His coaching approach combines evidence-based programming, performance data, and hands-on expertise to deliver training that is both efficient and effective.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          Marc works with clients across endurance sports, strength development, and general fitness, offering:
        </p>
        <ul className="mb-6 ml-6 md:ml-8 space-y-2 text-base md:text-lg leading-relaxed list-disc">
          <li>Individualized training programs built around your goals, schedule, and performance metrics</li>
          <li>One-on-one coaching sessions that prioritize technique, progression, and long-term development</li>
          <li>Ongoing support and accountability to ensure your training stays consistent and meaningful</li>
        </ul>
      </div>

      {/* Magazine-Style Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
        {/* Large Featured Image - Takes 3 columns on desktop */}
        <div className="md:col-span-1 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/running-3.png"
            alt="Marc Lewis coaching session"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle Column - Two Stacked Images */}
        <div className="flex flex-col md:col-span-1 gap-4 lg:gap-6">
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/biking.jpeg"
              alt="Training session"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/running-2.jpeg"
              alt="Athlete training"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Column - Large Featured Image */}
        <div className="md:col-span-1 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/swimming.jpeg"
            alt="Marc Lewis coaching session"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <p className="text-base md:text-lg leading-relaxed mb-8">
        Whether you're preparing for competition, rebuilding your fitness foundation, or looking to take your performance to the next level, Marc provides science-backed coaching designed to produce measurable results—and a training experience rooted in clarity, purpose, and professionalism.
      </p>

      {/* CTA Section with Background Image */}
      <section className="relative w-full overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="md:col-span-2 relative h-[700px] md:h-[800px] lg:h-[900px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/vt-jump.jpeg"
            alt="Start your coaching journey"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CTA Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-8 md:py-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
            Ready to Elevate Your Performance?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
            Start your journey with personalized, science-backed coaching
          </p>
          <Link href="/contact">
            <Button className="cursor-pointer text-base md:text-lg px-6 md:px-8">
              Inquire About Coaching
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
}