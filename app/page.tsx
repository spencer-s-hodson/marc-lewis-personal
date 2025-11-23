import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center">
          <Hero />
          <Credentials />

          <section className="py-16">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Expert Services
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive sports science solutions tailored to your unique needs
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Performance Optimization</CardTitle>
                      <CardDescription>
                        Data-driven strategies to maximize athletic potential and achieve peak performance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services">
                        <Button variant="ghost" className="p-0 h-auto font-normal text-primary">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Athlete Monitoring</CardTitle>
                      <CardDescription>
                        Comprehensive tracking systems to optimize training loads and prevent injuries
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services">
                        <Button variant="ghost" className="p-0 h-auto font-normal text-primary">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Strength & Conditioning</CardTitle>
                      <CardDescription>
                        Evidence-based programs designed for sport-specific performance enhancement
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services">
                        <Button variant="ghost" className="p-0 h-auto font-normal text-primary">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center mt-8">
                  <Link href="/services">
                    <Button variant="outline" size="lg">
                      View All Services
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Media Preview */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Media & Insights
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Latest podcasts, videos, and thought leadership in sports science
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="group hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                    <div className="relative aspect-video">
                      {/* <Image
                      src="https://images.unsplash.com/photo-1518609571773-39bba12d88d2?q=80&w=1200&auto=format&fit=crop"
                      alt="Podcast"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    /> */}
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">Podcast</Badge>
                      <CardTitle className="text-lg">The Science of Athletic Recovery</CardTitle>
                      <CardDescription>
                        Exploring cutting-edge recovery methods and their impact on performance
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                    <div className="relative aspect-video">
                      {/* <Image
                      src="https://images.unsplash.com/photo-1516826957135-700dedea698d?q=80&w=1200&auto=format&fit=crop"
                      alt="Video"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    /> */}
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">Video</Badge>
                      <CardTitle className="text-lg">Performance Monitoring Systems</CardTitle>
                      <CardDescription>
                        How to implement effective athlete tracking in your organization
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                    <div className="relative aspect-video">
                      {/* <Image
                      src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop"
                      alt="Interview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    /> */}
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">Interview</Badge>
                      <CardTitle className="text-lg">Future of Sports Science</CardTitle>
                      <CardDescription>
                        Discussing emerging technologies and methodologies in athletic performance
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Link href="/media">
                    <Button variant="outline" size="lg">
                      View All Media
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

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
                  <Button size="lg" className="text-lg px-8">
                    Book Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
