"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "visitor"
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Сайн уу! Ямар нэгэн асуулт байвал энд бичнэ үү 💕",
      sender: "user",
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [unreadCount, setUnreadCount] = useState(1)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
    }
  }, [isOpen])

  const handleSend = () => {
    if (!newMessage.trim()) return

    const visitorMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "visitor",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, visitorMessage])
    setNewMessage("")

    // Simulate typing indicator and auto-reply
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: "Баярлалаа! Таны мессежийг хүлээн авлаа. Удахгүй хариулах болно 💕",
        sender: "user",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, autoReply])

      if (!isOpen) {
        setUnreadCount((prev) => prev + 1)
      }
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button with Notification Badge */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-4 z-50 group">
        <div className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}

          {/* Notification Badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}

          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-75" />
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute left-16 bottom-2 bg-card/90 backdrop-blur-sm text-foreground text-sm px-3 py-1.5 rounded-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Надтай чатлах
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 md:w-96 bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary/20 backdrop-blur-sm p-4 border-b border-border/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Live Chat</h3>
                <p className="text-xs text-muted-foreground">Идэвхтэй байна</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "visitor" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    message.sender === "visitor"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {message.text}
                  <p className="text-[10px] opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString("mn-MN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/30 bg-card/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Мессеж бичих..."
                className="flex-1 bg-input/50 border border-border/50 rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="rounded-xl bg-primary hover:bg-primary/90"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
