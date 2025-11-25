import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type?: "milestone" | "achievement" | "experience";
  image?: string;
  imageAlt?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line - adjusted for mobile */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-12 md:pl-20 group"
          >
            {/* Timeline dot - adjusted for mobile */}
            <div className="absolute left-2.5 md:left-5 top-1 w-5 h-5 md:w-7 md:h-7 rounded-full bg-background border-2 md:border-4 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary group-hover:animate-pulse" />
            </div>
            
            {/* Year badge - stacked on mobile, absolute on desktop */}
            <div className="mb-3 md:mb-0 md:absolute md:left-0 md:top-0 md:-translate-x-full md:pr-8 md:text-right">
              <span className="inline-block px-3 py-1 text-xs md:text-sm font-bold text-primary bg-primary/10 rounded-full">
                {item.year}
              </span>
            </div>
            
            {/* Content card */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50">
              {/* Image at top of card if provided */}
              {item.image && (
                <div className="w-full h-40 md:h-48 flex items-center justify-center p-6 bg-white/10">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className={`h-full w-auto object-contain ${
                      item.image.includes('nsca') ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>
              )}
              
              {/* Card content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start gap-3 mb-2">
                  {item.type === "achievement" && (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">{item.organization}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

