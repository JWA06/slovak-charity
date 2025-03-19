"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Component for animated section that fades in when scrolled into view
export const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface CollapsibleSectionProps {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

// Collapsible section component
export const CollapsibleSection = ({ title, children, defaultOpen = false, className }: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn("border rounded-lg overflow-hidden mb-6", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div className="font-bold">{title}</div>
        <div className="h-5 w-5 text-primary">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          )}
        </div>
      </button>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

interface HoverCardProps {
  children: ReactNode
  className?: string
}

// Card with hover effect
export const HoverCard = ({ children, className }: HoverCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface GlowingBorderProps {
  children: ReactNode
  className?: string
}

// Element with glowing border on hover
export const GlowingBorder = ({ children, className }: GlowingBorderProps) => {
  return (
    <div className={cn("group relative p-1 rounded-xl", className)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
      <div className="relative">{children}</div>
    </div>
  )
}

