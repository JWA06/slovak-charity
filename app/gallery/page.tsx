"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { AnimatedSection } from "@/components/ui/animated-elements"
import { useLanguage } from "@/contexts/language-context"

// Sample gallery data - replace with actual images from Facebook when available
const galleryData = {
  community: [
    {
      id: "community-1",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community gathering",
      title: "Community Gathering",
      description: "Members of our Slovak community enjoying time together",
      date: "September 2023",
    },
    {
      id: "community-2",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community celebration",
      title: "Independence Day Celebration",
      description: "Celebrating Slovak independence with traditional performances",
      date: "September 2023",
    },
    {
      id: "community-3",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community workshop",
      title: "Cultural Workshop",
      description: "Learning traditional Slovak crafts together",
      date: "October 2023",
    },
    {
      id: "community-4",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community meeting",
      title: "Monthly Community Meeting",
      description: "Planning upcoming events and activities",
      date: "November 2023",
    },
    {
      id: "community-5",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community volunteers",
      title: "Volunteer Team",
      description: "Our dedicated volunteers who make everything possible",
      date: "December 2023",
    },
    {
      id: "community-6",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Community social",
      title: "Social Gathering",
      description: "Making new friends and connections",
      date: "January 2024",
    },
  ],
  events: [
    {
      id: "event-1",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Slovak Christmas Market",
      title: "Christmas Market",
      description: "Traditional Slovak Christmas market with crafts and treats",
      date: "December 2023",
    },
    {
      id: "event-2",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Easter Workshop",
      title: "Easter Traditions Workshop",
      description: "Learning to decorate Easter eggs the Slovak way",
      date: "March 2024",
    },
    {
      id: "event-3",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Slovak Food Festival",
      title: "Food Festival",
      description: "Sampling delicious Slovak cuisine",
      date: "May 2024",
    },
    {
      id: "event-4",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Slovak Film Night",
      title: "Film Night",
      description: "Screening of contemporary Slovak cinema",
      date: "February 2024",
    },
    {
      id: "event-5",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Slovak Dance Workshop",
      title: "Dance Workshop",
      description: "Learning traditional Slovak folk dances",
      date: "April 2024",
    },
    {
      id: "event-6",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Slovak Summer Festival",
      title: "Summer Festival",
      description: "Our biggest annual celebration of Slovak culture",
      date: "July 2023",
    },
  ],
  cultural: [
    {
      id: "cultural-1",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional costumes",
      title: "Traditional Costumes",
      description: "Showcasing authentic Slovak folk costumes",
      date: "October 2023",
    },
    {
      id: "cultural-2",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional music",
      title: "Folk Music Performance",
      description: "Live performance of traditional Slovak music",
      date: "November 2023",
    },
    {
      id: "cultural-3",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional crafts",
      title: "Craft Exhibition",
      description: "Exhibition of traditional Slovak craftsmanship",
      date: "January 2024",
    },
    {
      id: "cultural-4",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional dance",
      title: "Folk Dance Performance",
      description: "Showcasing traditional Slovak dance forms",
      date: "March 2024",
    },
    {
      id: "cultural-5",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional food",
      title: "Culinary Traditions",
      description: "Preparing traditional Slovak dishes",
      date: "April 2024",
    },
    {
      id: "cultural-6",
      src: "/placeholder.svg?height=600&width=600",
      alt: "Traditional celebrations",
      title: "Seasonal Celebrations",
      description: "Honoring traditional Slovak seasonal customs",
      date: "May 2024",
    },
  ],
}

export default function GalleryPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<"community" | "events" | "cultural">("community")

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-white to-accent/10">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Photo Gallery</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore moments from our community events and cultural celebrations
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection delay={100}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  variant={activeCategory === "community" ? "default" : "outline"}
                  onClick={() => setActiveCategory("community")}
                  className="min-w-[120px]"
                >
                  Community
                </Button>
                <Button
                  variant={activeCategory === "events" ? "default" : "outline"}
                  onClick={() => setActiveCategory("events")}
                  className="min-w-[120px]"
                >
                  Events
                </Button>
                <Button
                  variant={activeCategory === "cultural" ? "default" : "outline"}
                  onClick={() => setActiveCategory("cultural")}
                  className="min-w-[120px]"
                >
                  Cultural
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              {activeCategory === "community" && (
                <PhotoGallery
                  photos={galleryData.community}
                  title="Community Gatherings"
                  description="Moments from our community gatherings and social events"
                />
              )}
              {activeCategory === "events" && (
                <PhotoGallery
                  photos={galleryData.events}
                  title="Events & Celebrations"
                  description="Highlights from our special events and celebrations throughout the year"
                />
              )}
              {activeCategory === "cultural" && (
                <PhotoGallery
                  photos={galleryData.cultural}
                  title="Cultural Showcase"
                  description="Showcasing Slovak cultural traditions, performances, and heritage"
                />
              )}
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Follow Us on Social Media</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay updated with our latest events and activities by following us on social media
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90" asChild>
                    <a
                      href="https://www.facebook.com/profile.php?id=61557468560704"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                  </Button>
                  <Button className="bg-[#E4405F] hover:bg-[#E4405F]/90" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}

