"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
  duration: number
  size: number
  type: "square" | "heart" | "circle"
}

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = [
      "oklch(0.75 0.12 20)", // Rose gold
      "oklch(0.8 0.1 350)", // Pink
      "oklch(0.9 0.08 350)", // Light pink
      "oklch(0.7 0.15 15)", // Coral
      "oklch(0.95 0.02 350)", // Cream
    ]

    const types: ("square" | "heart" | "circle")[] = ["square", "heart", "circle"]

    const newPieces: ConfettiPiece[] = []
    for (let i = 0; i < 80; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.8,
        duration: Math.random() * 3 + 2,
        size: Math.random() * 10 + 6,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }
    setPieces(newPieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0"
          style={{
            left: `${piece.x}%`,
            fontSize: piece.type === "heart" ? `${piece.size}px` : undefined,
            width: piece.type !== "heart" ? `${piece.size}px` : undefined,
            height: piece.type !== "heart" ? `${piece.size * (piece.type === "square" ? 1.5 : 1)}px` : undefined,
            backgroundColor: piece.type !== "heart" ? piece.color : undefined,
            color: piece.type === "heart" ? piece.color : undefined,
            borderRadius: piece.type === "circle" ? "50%" : piece.type === "square" ? "2px" : undefined,
            animation: `confetti-fall ${piece.duration}s ease-out forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {piece.type === "heart" && "♥"}
        </div>
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(10vh) rotate(180deg) scale(1);
          }
          100% {
            transform: translateY(100vh) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
