import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="w-full py-16">
        <div className="container w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Services
            </h2>
            <p className="text-muted-foreground text-lg">
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
      </section>
    </>
  );
}
