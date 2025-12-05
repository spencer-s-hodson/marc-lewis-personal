import Image from "next/image";
import { PodcastIcon } from "lucide-react";
import { Metadata } from "next";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const metadata: Metadata = {
  title: "Media",
  description: "Explore Dr. Marc Lewis's podcast interviews, research publications, and articles on sports science and performance optimization.",
};

export default function Media() {
  const podcasts = [
    {
      title: "Iron Culture Podcast",
      episode: "Ep 344 - Sports Science In Elite Athletics (ft. Dr. Marc Lewis)",
      description: "Dr. Lewis discusses sports science applications in elite athletics.",
      image: "/images/podcasts/iron-culture.jpg",
      links: [
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=IXd0-4jHfzs", icon: "▶️" },
        { platform: "Spotify", url: "https://creators.spotify.com/pod/profile/massresearchreview/episodes/Ep-344---Sports-Science-In-Elite-Athletics-ft--Dr--Marc-Lewis-e37rej4", icon: "🎧" },
      ],
    },
    {
      title: "Science for Sport",
      episode: "287: Data With Purpose: How the Houston Texans Use Sports Science to Drive Performance",
      description: "Deep dive into how the Houston Texans leverage sports science and data analytics.",
      image: "/images/podcasts/science-for-sport.jpg",
      links: [
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=V8B1MTHpt7s", icon: "▶️" },
      ],
    },
    {
      title: "Strength Coach Network",
      episode: "The Future of High Performance in Sport",
      description: "Improve Athlete Performance INSTANTLY Using This System of Evaluation.",
      image: "/images/podcasts/strength-coach-network.jpg",
      links: [
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=d7OmHHxHhY4", icon: "▶️" },
      ],
    },
    {
      title: "Cheeky Mid Weeky",
      episode: "Dr. Marc Lewis | Future of High Performance In Sport",
      description: "Discussion on the evolving landscape of high-performance sport science.",
      image: "/images/podcasts/cheeky-mid-weekly.jpg",
      links: [
        { platform: "Poddtoppen", url: "https://poddtoppen.se/podcast/1688781157/cheeky-mid-weeky/dr-marc-lewis-future-of-high-performance-in-sport", icon: "▶️" },
      ],
    },
    {
      title: "Sportsmith",
      episode: "Maximising performance, managing fatigue and optimising recovery in American Football",
      description: "Practical strategies for performance optimization and recovery management.",
      image: "/images/podcasts/pacey-performance.webp",
      links: [
        { platform: "Sportsmith", url: "https://www.sportsmith.co/listen/maximising-performance-managing-fatigue-and-optimising-recovery-in-american-football/", icon: "▶️" },
      ],
    },
  ];

  const articles = [
    {
      title: "Which tool or piece of equipment has provided you with the highest return on investment over the past 12 months?",
      publication: "Sportsmith",
      description: "Expert insights on cost-effective equipment and tools for high-performance training environments.",
      link: "https://www.sportsmith.co/articles/which-tool-or-piece-of-equipment-has-provided-you-with-the-highest-return-on-investment-over-the-past-12-months/",
      type: "article",
      image: "/images/articles/sportsmith1.webp",
    },
    {
      title: "Monitoring training load and athlete response in team sport",
      publication: "Sportsmith",
      description: "Comprehensive guide to implementing effective training load monitoring systems.",
      link: "https://www.sportsmith.co/videos/monitoring-training-load-and-athlete-response-in-team-sport/",
      type: "article",
      image: "/images/articles/sportsmith2.webp",
    },
    {
      title: "Going deep into GPS metrics for American football",
      publication: "Sportsmith",
      description: "Advanced analysis of GPS technology application in professional football performance.",
      link: "https://www.sportsmith.co/articles/going-deep-into-gps-metrics-for-american-football/",
      type: "article",
      image: "/images/articles/sportsmith3.webp",
    },
    {
      title: "Graduation is More Than A Degree For VA Tech Director of Sports Science",
      publication: "The Roanoke Star",
      description: "Dr. Lewis's journey and philosophy on education and professional development in sports science.",
      link: "https://www.theroanokestar.com/2021/05/03/graduation-is-more-than-a-degree-for-va-tech-director-of-sports-science/",
      type: "feature",
      image: "/images/articles/graduation-is-more-than.jpg",
    },
    {
      title: "How to Maximize Concurrent Training",
      publication: "Bret Contreras",
      description: "Evidence-based strategies for balancing strength and endurance training adaptations.",
      link: "https://bretcontreras.com/how-to-maximize-concurrent-training/",
      type: "article",
      image: "/images/articles/how-to-maximize-concurrent-training.png",
    },
    {
      title: "Programming Cardio to Support Muscle & Strength Development",
      publication: "Sports Science",
      description: "Practical guidelines for integrating cardiovascular training with strength programs.",
      link: "https://drjohnrusin.com/cardio-to-support-muscle-strength-development/",
      type: "article",
      image: "/images/articles/programming-cardio-to-support-muscle-strength-development.jpg",
    },
    // {
    //   title: "Putting the C in S&C: An Energy Systems-based Approach",
    //   publication: "Sports Science",
    //   description: "Comprehensive framework for conditioning within strength and conditioning programs.",
    //   link: "#",
    //   type: "article",
    //   image: "/images/articles/sports-science.jpg",
    // },
    {
      title: "Strength Training and Endurance Athletes",
      publication: "Sports Science",
      description: "Exploring the role and implementation of strength training for endurance performance.",
      link: "https://www.researchgate.net/publication/286937718_Strength_Training_and_Endurance_Athletes",
      type: "article",
      image: "/images/articles/strength-training-endurance-athletes.png",
    },
    {
      title: "Dietary Nitrate Supplementation Improves Exercise Performance and Decreases Blood Pressure in COPD Patients",
      publication: "PMC",
      description: "Research study examining the effects of nitrate supplementation on exercise capacity and cardiovascular health.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4411191/",
      type: "research",
      image: "/images/articles/dietary-nitrate-supplementation.jpg",
    },
    {
      title: "Interobserver Reliability of Quantitative Muscle Sonographic Analysis in the Critically Ill Population",
      publication: "Journal of Ultrasound in Medicine",
      description: "Validation study of muscle ultrasound techniques for clinical assessment.",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.7863/ultra.34.7.1191",
      type: "research",
      image: "/images/articles/wiley-library.png",
    },
  ];

  const otherMedia = [
    {
      title: "Sport Science Handbook",
      description: "Comprehensive guide for evidence-based decision-making in sport science.",
      link: "https://www.sportsmith.co/profile/marc-lewis/",
      image: "/images/other-media/ssh-cover.jpg",
      type: "Resource",
      date: "",
    },
    {
      title: "Sport Science Network",
      description: "Online hub for sport science resources and community.",
      link: "https://sportsciencenetwork.com",
      image: "/images/companies/ssn.png",
      type: "Website",
      date: "",
    },
    {
      title: "Marc Lewis - Sportsmith",
      description: "Profile feature on Marc Lewis and his work in sports science.",
      link: "https://www.sportsmith.co/profile/marc-lewis/",
      image: "/images/other-media/sportsmith.jpeg",
      type: "Profile",
      date: "",
    },
    {
      title: "For Marc Lewis, graduation is more than a degree",
      description: "Feature story on Dr. Lewis's journey and philosophy on education and professional development.",
      link: "https://www.theroanokestar.com/2021/05/03/graduation-is-more-than-a-degree-for-va-tech-director-of-sports-science/",
      image: "/images/articles/graduation-is-more-than.jpg",
      type: "Feature",
      date: "May 2021",
    },
    {
      title: "Meet Marc Lewis, NFL Salute to Service 2024 Nominee",
      description: "Recognition of Dr. Lewis's contributions to the NFL community and veteran support.",
      link: "https://www.nfl.com/causes/salute/nominees/2024/texans",
      image: "/images/other-media/marc-salute.webp",
      type: "Recognition",
      date: "2024",
    },
  ];

  const YouTubeIcon = () => {
    return (
      <Image
        src="/icons/youtube.svg"
        alt="YouTube"
        width={28}
        height={28}
        className="brightness-0 invert"
      />
    );
  };

  const SpotifyIcon = () => {
    return (
      <Image
        src="/icons/spotify.svg"
        alt="Spotify"
        width={28}
        height={28}
        className="brightness-0 invert"
      />
    );
  };

  return (
    <>
      <section className="py-12">
        <div className="container w-full space-y-16">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Media & Insights</h1>
            <p className="text-lg text-muted-foreground">
              Explore Dr. Marc Lewis's contributions to sports science through podcast interviews,
              research publications, and feature articles. Discover insights on high-performance
              training, athlete monitoring, and the latest advancements in sports science.
            </p>
          </div>

          {/* Podcast Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Podcasts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <div key={index} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-40 bg-muted flex items-center justify-center overflow-hidden relative">
                    <a href={podcast.links[0].url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={podcast.image}
                        alt={podcast.title}
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-1">{podcast.title}</h3>
                    <p className="text-muted-foreground mb-2 text-sm">{podcast.episode}</p>
                    <p className="text-sm text-foreground mb-4">{podcast.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-medium">Listen on:</span>
                      {podcast.links.map((link, linkIndex) => (
                        <HoverCard key={linkIndex}>
                          <HoverCardTrigger asChild>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                            >
                              {link.platform === "YouTube" ? (
                                <YouTubeIcon />
                              ) : link.platform === "Spotify" ? (
                                <SpotifyIcon />
                              ) : (
                                <PodcastIcon className="w-7 h-7 hover:opacity-80" />
                              )}
                            </a>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-auto">
                            <div className="text-sm">
                              <p>{link.platform}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles & Publications Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Articles & Publications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="h-40 bg-muted flex items-center justify-center overflow-hidden relative">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{article.publication}</p>
                    <p className="text-sm text-foreground mb-4 flex-1">{article.description}</p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary font-medium hover:underline mt-auto"
                    >
                      Read {article.type === "research" ? "Research" : article.type === "feature" ? "Feature" : "Article"} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Media Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Other Media</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherMedia.map((media, index) => (
                <div key={index} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="h-40 bg-muted flex items-center justify-center overflow-hidden relative">
                    <a href={media.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={media.image}
                        alt={media.title}
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-1">{media.title}</h3>
                    {media.date && <p className="text-muted-foreground text-sm mb-2">{media.date}</p>}
                    <p className="text-sm mb-4 flex-1">{media.description}</p>
                    <a
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary font-medium hover:underline mt-auto"
                    >
                      View {media.type} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
