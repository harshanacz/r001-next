"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.ibb.co/dw8jnzQN/pexels-wendywei-1190297.jpg?height=1080&width=1920')",
            filter: "brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          {/* Main headline */}
          <h1 className="mb-4 flex flex-wrap items-center justify-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-purple-500">Live</span>
            <span className="text-white">. Don&apos;t Just Exist.</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-white drop-shadow-md sm:text-xl md:text-2xl">
            Discover the most happening events around you
          </p>

          {/* Search bar */}
          <div
            className={cn(
              "mx-auto w-full max-w-md transition-all duration-1000 delay-300 ease-out",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={20} />
              </div>
              <Input
                type="text"
                placeholder="Search for events..."
                className="h-12 w-full rounded-full border-0 bg-white/90 pl-10 pr-4 text-gray-900 backdrop-blur-sm focus-visible:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
