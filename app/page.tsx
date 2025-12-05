import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Services from "@/components/services";
import Media from "@/components/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dr. Marc Lewis",
  description: "Leader in Applied Sport Science, Performance, and Human Resilience",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center">
          <Hero />
          <Credentials />
          <Services />
          <Media />

          {/* CTA Section */}
          <section className="py-16">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Optimize Your Performance?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Schedule a consultation to discuss how Dr. Lewis can help you achieve your athletic goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/contact">
                      Book Consultation
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" className="text-lg px-8">
                    <Link href="/services">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
