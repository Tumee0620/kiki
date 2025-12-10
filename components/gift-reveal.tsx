"use client";

import { useEffect, useRef } from "react";
import { Heart, Sparkles, PartyPopper, Music } from "lucide-react";
import { Confetti } from "@/components/confetti";

export function GiftReveal() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // The iframe will auto-play the music
  }, []);

  return (
    <div className="text-center space-y-10 max-w-2xl animate-reveal">
      <Confetti />

      <div className="fixed top-4 right-4 z-50">
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-3 border border-border/50 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Music className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Now Playing</span>
          </div>
          <iframe
            ref={iframeRef}
            width="250"
            height="50"
            src="https://www.youtube.com/embed/WDxVPg_AZ-k?rel=0&autoplay=1&loop=1&playlist=WDxVPg_AZ-k"
            title="Background Music"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <PartyPopper className="w-10 h-10 text-accent animate-bounce" />
        <Heart
          className="w-10 h-10 text-primary animate-pulse"
          fill="currentColor"
        />
        <Sparkles
          className="w-10 h-10 text-accent animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <Heart
          className="w-10 h-10 text-primary animate-pulse"
          fill="currentColor"
          style={{ animationDelay: "0.2s" }}
        />
        <PartyPopper
          className="w-10 h-10 text-accent animate-bounce"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      <div className="bg-card/60 backdrop-blur-md rounded-[2rem] p-10 border border-primary/30 shadow-2xl animate-pulse-glow">
        <div className="space-y-6">
          <p className="text-muted-foreground tracking-[0.4em] uppercase text-sm">
            Чиний нууц Санта бол Хэлэх болоогүйээ ахахаха
          </p>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-primary py-4">
            Kyuko
            <br />
            <span className="text-accent text-4xl md:text-5xl">танаа</span>
          </h2>

          <div className="border border-primary/40 rounded-xl p-6 bg-card/30 backdrop-blur-sm">
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed flex flex-col gap-1">
              <span>Өглөө бүрийн нар шиг туяатай байгаарай,</span>
              <span>Өндөр зорилго бүртээ итгэлтэй алхaaрай.</span>
              <span>
                Алдаа бэрхшээл ирсэн ч дээгүүр гарах хүчтэй байгаарай,
              </span>
              <span>
                Амжилт бүр чинь сэтгэлийн галыг тань бадраадаг байгаасай.
              </span>
              <span>Сэтгэлийн гал нь мөхөлгүй бадраасай,</span>
              <span>Сэхээтэн бодол тань замыг нь гэрэлтүүлдэг байгаасай.</span>
              <span>Өнөөдөр таны өдрийн нэг жижигхэн эрчим,</span>
              <span>Өнөөх мөрөөдөлд тань хүргэх том хүч байх болтугай.</span>
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary/80 animate-pulse"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
          Бүүдгэр өвлийн баргар нэг өдөрт чинь
          <span className="text-primary font-medium"> аз жаргалаар гэрэл </span>
          нэмэхийг хүслээ
        </p>
        <p className="text-lg text-muted-foreground">хүлээлгэсэнд уучлаарай</p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="pt-6">
        <div className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
          <Sparkles className="w-4 h-4 text-accent" />
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Аз жаргалтай өдрийн мэнд
          </p>
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
      </div>
    </div>
  );
}
