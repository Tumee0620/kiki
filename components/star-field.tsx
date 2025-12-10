"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

interface FloatingHeart {
  id: number
  x: number
  size: number
  delay: number
  duration: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2,
        })
      }
      setStars(newStars)
    }

    const generateHearts = () => {
      const newHearts: FloatingHeart[] = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 16 + 10,
          delay: Math.random() * 8,
          duration: Math.random() * 4 + 5,
        })
      }
      setHearts(newHearts)
    }

    generateStars()
    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/50"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute text-accent/20 animate-heart-float"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          ♥
        </div>
      ))}

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[60px]" />
    </div>
  )
}
