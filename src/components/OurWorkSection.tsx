import { useState, useEffect } from "react";
import { Play, X, ChevronDown } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const videos = [
  {
    id: "kgfRjT_Yd6c",
    title: "Smart Home Full Walkthrough",
    category: "Project Tour",
  },
  {
    id: "9-vWJl8c_bI",
    title: "ALO Smart Curtain Installation",
    category: "Product Demo",
  },
  {
    id: "UXsIwbLVj7k",
    title: "Gulshan Apartment Transformation",
    category: "Before & After",
  },
  {
    id: "Qp1qXmu1JNg",
    title: "Smart Switch Setup Guide",
    category: "Product Demo",
  },
  {
    id: "Oivl481b1kA",
    title: "Smart Living Transformation",
    category: "Project Tour",
  },
  {
    id: "EaHfRVFyjME",
    title: "Sohub Smart Home Experience",
    category: "Product Demo",
  },
];

const filters = ["All", "Project Tour", "Product Demo", "Before & After"];

const OurWorkSection = () => {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null);
  const [videoTitles, setVideoTitles] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  // Fetch real titles dynamically
  useEffect(() => {
    videos.forEach((video) => {
      fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.title) {
            setVideoTitles((prev) => ({ ...prev, [video.id]: data.title }));
          }
        })
        .catch((err) => console.error("Error fetching video title:", err));
    });
  }, []);

  const filtered = active === "All"
    ? videos
    : videos.filter(v => v.category === active);

  const visibleItems = expanded ? filtered : filtered.slice(0, 8);
  const hasMore = filtered.length > 8;

  return (
    <section id="our-work" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              Our Work
            </p>
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              See it in <span className="text-primary">action.</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto">
              Real installations. Real homes. Real results.
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => { setActive(f); setExpanded(false); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === f
                    ? "bg-foreground text-background"
                    : "bg-[#F5F5F5] dark:bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-[#EBEBEB]"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {visibleItems.map((video, i) => (
            <Reveal key={`${video.id}-${i}`} delay={i * 0.08} direction="up">
              <div
                onClick={() => setSelectedVideo(video)}
                className="rounded-[18px] overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="aspect-video relative overflow-hidden bg-[#F5F5F5] dark:bg-secondary/50">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-background/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play size={16} className="text-foreground ml-0.5 fill-foreground" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 bg-primary/95 backdrop-blur-sm">
                  <p className="text-sm text-primary-foreground font-semibold truncate" title={videoTitles[video.id] || video.title}>
                    {videoTitles[video.id] || video.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {hasMore && !expanded && (
          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F5F5] dark:bg-secondary/50 rounded-full text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-[#EBEBEB] transition-all duration-300"
              >
                Show more <ChevronDown size={16} />
              </button>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.35}>
          <div className="text-center mt-10">
            <a
              href="https://youtube.com/@sohub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              Watch more on YouTube →
            </a>
          </div>
        </Reveal>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="rounded-[24px] overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="px-6 py-6 bg-primary/95 backdrop-blur-sm">
                <p className="text-xl text-primary-foreground font-bold">
                  {videoTitles[selectedVideo.id] || selectedVideo.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWorkSection;
