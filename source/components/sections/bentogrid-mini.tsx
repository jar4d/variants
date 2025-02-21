"use client";

import { useEffect, useState } from "react";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";

export default function BentoGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Time, sucked.",
      description: "An average manager spends 3 hours a day shuffling messages on Slack, instead of tackling the big stuff.",
      video: "/8468840-uhd_4096_2160_25fps.mp4",
      color: "from-purple-900/80",
    },
    {
      title: "So. Much. Noise.",
      description: "On average, you're fielding 90 messages a day on Slack alone. Is there any wonder you're feeling overwhelmed?",
      video: "/9063070-uhd_4096_2160_25fps.mp4",
      color: "from-indigo-900/80",
    },
    {
      title: "Distractions at every turn.",
      description: "No time. Too much noise. Not enough time to focus on what really matters: epic delivery, big swings and team",
      video: "/9077858-uhd_4096_2160_25fps.mp4",
      color: "from-blue-900/80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((current) => (current + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container py-24">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-[800px] pb-12">
          <HeaderSection
            label="Here's the thing."
            title="Your Time is Precious."
            subtitle="Stop wasting time on busywork. Claim back time for what makes an impact—for you, your team, and your goals. These are the little tools you need to win the battle."
          />
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl border bg-muted">
            {/* Video Slides */}
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  currentSlide === i 
                    ? "translate-x-0" 
                    : currentSlide < i 
                      ? "translate-x-full"
                      : "-translate-x-full"
                }`}
              >
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} via-black/30 to-transparent`} />
                
                {/* Content - Reduced text sizes */}
                <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <h3 className="mb-2 text-xl font-medium text-white md:text-2xl">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-200 md:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    currentSlide === i 
                      ? "w-4 bg-white" 
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => setCurrentSlide((current) => (current - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-1.5 text-white backdrop-blur-sm transition-all hover:bg-black/40"
              aria-label="Previous slide"
            >
              <Icons.chevronLeft className="size-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((current) => (current + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-1.5 text-white backdrop-blur-sm transition-all hover:bg-black/40"
              aria-label="Next slide"
            >
              <Icons.chevronRight className="size-4" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
