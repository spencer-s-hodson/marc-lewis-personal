import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Media() {
  return (
    <>
      {/* Media Preview */}
      <section className="w-full py-16 from-primary/10 via-secondary/10 to-transparent">
        <div className="container px-4">
          <div className="">
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
    </>
  )
};