"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/shared/icons";
import { useState } from "react";
import { CtaSection as CtaSectionType } from "@/types";

interface CtaSectionProps {
  data: CtaSectionType;
}

export default function CtaSection({ data }: CtaSectionProps) {
  const [email, setEmail] = useState("");

  return (
    <section className="relative pb-12 pt-24">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={data.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-light text-white md:text-3xl lg:text-[32px]">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-gray-300 [text-wrap:balance]">
            {data.subtitle}
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md mx-auto">
            <Input
              type="email"
              placeholder={data.input.placeholder}
              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              size="lg"
              rounded="full"
              className="h-11 px-8 gap-2"
            >
              {data.button.text}
              <Icons.arrowRight className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}