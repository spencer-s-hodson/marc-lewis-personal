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
        {/* Large Featured Image - Takes 2 columns on desktop */}
        <div className="md:col-span-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/all-images/texans-training-camp-3.jpeg"
            alt="Marc Lewis coaching session"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right Column - Two Stacked Images */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/fsu-mentors.jpeg"
              alt="Training session"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] md:h-[192px] lg:h-[242px] rounded-lg overflow-hidden">
            <Image
              src="/images/all-images/excercise.jpeg"
              alt="Athlete training"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      
      
      <p className="text-base md:text-lg leading-relaxed mb-8">
        Whether you're preparing for competition, rebuilding your fitness foundation, or looking to take your performance to the next level, Marc provides science-backed coaching designed to produce measurable results—and a training experience rooted in clarity, purpose, and professionalism.
      </p>

      {/* CTA Section with Background Image */}
      <section className="relative w-full overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="relative w-full">
          <Image
            src="/images/all-images/tennessee-titans.jpeg"
            alt="Start your coaching journey"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CTA Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-8 md:py-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Ready to Elevate Your Performance?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
            Start your journey with personalized, science-backed coaching
          </p>
          <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8">
            <Link href="mailto:marc.lewis@email.com?subject=Coaching%20Inquiry&body=Hi%20Marc%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20coaching%20services.%0A%0A">
              Inquire About Coaching
            </Link>
          </Button>
        </div>
      </section>
    </section>
  );
}