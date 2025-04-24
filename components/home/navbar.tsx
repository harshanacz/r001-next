"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UserButton, useUser } from "@clerk/nextjs"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {user} = useUser();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          EventHub
        </Link>

        {/* Desktop Navigation */}
        {user?(
            <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
              },
            }}
          />
        )
        
      :(
        <>
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="outline" className="border-2 transition-all hover:bg-accent">
            Publish Event
          </Button>
          <Button className="bg-purple-600 text-white transition-all hover:bg-purple-700 hover:shadow-md">Join</Button>
        </div>
        </>
      )
      }
        

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "container overflow-hidden transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-40 pb-6" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-4">
          <Button variant="outline" className="w-full border-2 transition-all hover:bg-accent">
            Publish Event
          </Button>
          <Button className="w-full bg-purple-600 text-white transition-all hover:bg-purple-700 hover:shadow-md">
            Join
          </Button>
        </div>
      </div>
    </nav>
  )
}
