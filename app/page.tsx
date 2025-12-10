"use client";

import { useState } from "react";
import { StarField } from "@/components/star-field";
import { GiftReveal } from "@/components/gift-reveal";
import { RevealButton } from "@/components/reveal-button";
import { LiveChat } from "@/components/live-chat";
import { Gift, Sparkles, Heart } from "lucide-react";

export default function MonitaSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReveal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <StarField />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {!isRevealed ? (
          <div className="text-center space-y-10 max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-accent/60">
                <Heart className="w-4 h-4" fill="currentColor" />
                <p className="tracking-[0.4em] uppercase text-sm font-light">
                  Monita Surprise
                </p>
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-tight">
                Сайн уу
                <span className="block text-primary mt-2">Kyuko</span>
              </h1>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Хэн нэгний бэлэг чамайг хүлээж байна
                <br />
                <span className="text-foreground font-medium">
                  Secret santa-г илчлэхийг хүсэж байна уу?
                </span>
              </p>
            </div>

            <div className="flex justify-center py-6">
              <div
                className={`relative ${
                  isAnimating ? "animate-glow" : "animate-float"
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
                <Gift
                  className="w-28 h-28 md:w-36 md:h-36 text-primary relative z-10"
                  strokeWidth={1}
                />
                <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-accent animate-twinkle" />
                <Sparkles
                  className="absolute -bottom-2 -left-4 w-6 h-6 text-accent animate-twinkle"
                  style={{ animationDelay: "0.5s" }}
                />
                <Heart
                  className="absolute top-1/2 -right-6 w-5 h-5 text-accent/80 animate-twinkle"
                  fill="currentColor"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>

            <RevealButton onClick={handleReveal} isAnimating={isAnimating} />

            <p className="text-sm text-muted-foreground/50 tracking-widest uppercase pt-6 animate-shimmer">
              ДАРААРАЙ ХӨӨРХНӨӨ
            </p>
          </div>
        ) : (
          <GiftReveal />
        )}
      </div>

      <LiveChat />
    </main>
  );
}
