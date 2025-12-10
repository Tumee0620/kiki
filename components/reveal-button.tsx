"use client"

import { Button } from "@/components/ui/button"
import { Loader2, Heart } from "lucide-react"

interface RevealButtonProps {
  onClick: () => void
  isAnimating: boolean
}

export function RevealButton({ onClick, isAnimating }: RevealButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isAnimating}
      size="lg"
      className="px-14 py-7 text-xl font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:scale-110 disabled:opacity-70 animate-pulse-glow rounded-full"
    >
      {isAnimating ? (
        <>
          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
          Нээгдэж байна...
        </>
      ) : (
        <>
          <Heart className="mr-3 h-6 w-6" fill="currentColor" />
          Сантаг илчлэх
        </>
      )}
    </Button>
  )
}
