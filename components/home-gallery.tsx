"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection, GlowingBorder } from "@/components/ui/animated-elements"
import { ArrowRight } from "lucide-react"

// Sample gallery data - replace with actual images from Facebook when available
const featuredPhotos = [
  {
    id: "featured-1",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Community gathering",
    title: "Community Events",
  },
  {
    id: "featured-2",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Cultural performance",
    title: "Cultural Performances",
  },
  {
    id: "featured-3",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Traditional food",
    title: "Slovak Cuisine",
  },
  {
    id: "featured-4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Educational workshop",
    title: "Educational Workshops",
  },
]

export function HomeGallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Photo Gallery</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore moments from our community events and cultural celebrations
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredPhotos.map((photo, index) => (
            <AnimatedSection key={photo.id} delay={index * 100}>
              <GlowingBorder>
                <Link href="/gallery" className="block">
                  <div className="relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                    <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <p className="text-white p-4 font-medium">{photo.title}</p>
                    </div>
                  </div>
                </Link>
              </GlowingBorder>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="charity-button-primary relative overflow-hidden group" asChild>
            <Link href="/gallery" className="flex items-center">
              <span className="relative z-10">View Full Gallery</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

