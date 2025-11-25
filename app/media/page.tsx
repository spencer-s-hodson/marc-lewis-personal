import Image from "next/image";

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
      image: "/images/podcasts/iron-culture.jpg",
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
      title: "New Insights in Recovery Science",
      description: "A review of current evidence on optimizing athletic recovery strategies.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: "/images/articles/new-insights-in-recovery-science.jpg",
    },
  ];

  return (
    <>
      <section className="py-12">
        <div className="container w-full space-y-16">
          {/* Podcast Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Podcasts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <div key={index} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-40 bg-muted flex items-center justify-center overflow-hidden relative">
                    <Image 
                      src={podcast.image} 
                      alt={podcast.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-1">{podcast.title}</h3>
                    <p className="text-muted-foreground mb-2 text-sm">{podcast.episode}</p>
                    <p className="text-sm text-foreground mb-4">{podcast.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-medium">Listen on:</span>
                      {podcast.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl hover:scale-110 transition-transform duration-200"
                          title={link.platform}
                        >
                          {link.icon}
                        </a>
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
            <div className="grid md:grid-cols-2 gap-8">
              {/* Article Card 1 */}
              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">New Insights in Recovery Science</h3>
                  <p className="text-muted-foreground text-sm mb-2">Journal of Applied Physiology</p>
                  <p className="text-sm text-foreground mb-4 flex-1">A review of current evidence on optimizing athletic recovery strategies.</p>
                  <a
                    href="#"
                    className="inline-block text-primary font-medium hover:underline mt-auto"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
              {/* Article Card 2 */}
              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">Cutting-Edge Sport Technology</h3>
                  <p className="text-muted-foreground text-sm mb-2">Sportsmith</p>
                  <p className="text-sm text-foreground mb-4 flex-1">Exploring the latest advancements in wearable tech for athletes.</p>
                  <a
                    href="#"
                    className="inline-block text-primary font-medium hover:underline mt-auto"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Media Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Other Media</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Other Media Card 1 */}
              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <span className="text-4xl">🎬</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">Webinar: Athlete Monitoring</h3>
                  <p className="text-muted-foreground text-sm mb-2">Recorded: March 2024</p>
                  <p className="text-sm mb-4 flex-1">A practical demonstration on monitoring and adapting training loads.</p>
                  <a
                    href="#"
                    className="inline-block text-primary font-medium hover:underline mt-auto"
                  >
                    Watch Now →
                  </a>
                </div>
              </div>
              {/* Other Media Card 2 */}
              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <span className="text-4xl">🖥️</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">Conference Presentation</h3>
                  <p className="text-muted-foreground text-sm mb-2">USA Sports Science Expo</p>
                  <p className="text-sm mb-4 flex-1">Results from elite football performance and injury prevention projects.</p>
                  <a
                    href="#"
                    className="inline-block text-primary font-medium hover:underline mt-auto"
                  >
                    View Slides →
                  </a>
                </div>
              </div>
              {/* Other Media Card 3 */}
              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <span className="text-4xl">📺</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">TV Interview</h3>
                  <p className="text-muted-foreground text-sm mb-2">ESPN Segment</p>
                  <p className="text-sm mb-4 flex-1">Dr. Lewis shares insights on sports innovation and athlete health.</p>
                  <a
                    href="#"
                    className="inline-block text-primary font-medium hover:underline mt-auto"
                  >
                    Watch Clip →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}