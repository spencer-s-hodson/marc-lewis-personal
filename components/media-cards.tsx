import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { PodcastIcon } from "lucide-react";
import Image from "next/image";

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


interface Podcast {
  title: string;
  episode: string;
  description: string;
  image: string;
  links: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
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
  )
}

interface Article {
  title: string;
  publication: string;
  description: string;
  link: string;
  type: string;
  image: string;
}

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
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
  )
}

interface OtherMedia {
  title: string;
  description: string;
  link: string;
  image: string;
  type: string;
  date?: string;
}

export const OtherMediaCard = ({ otherMedia }: { otherMedia: OtherMedia }) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      <div className="h-40 bg-muted flex items-center justify-center overflow-hidden relative">
        <a href={otherMedia.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={otherMedia.image}
            alt={otherMedia.title}
            fill
            className="object-contain"
          />
        </a>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{otherMedia.title}</h3>
        {otherMedia.date && <p className="text-muted-foreground text-sm mb-2">{otherMedia.date}</p>}
        <p className="text-sm mb-4 flex-1">{otherMedia.description}</p>
        <a
          href={otherMedia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary font-medium hover:underline mt-auto"
        >
          View {otherMedia.type} →
        </a>
      </div>
    </div>
  )
}
