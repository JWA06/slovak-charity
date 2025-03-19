"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Search } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/ui/animated-elements"
import { Input } from "@/components/ui/input"

export default function EventsPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [filter, setFilter] = useState("all")

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Event data
  const events = [
    {
      id: 1,
      title: t("events.easter.title"),
      description: t("events.easter.desc"),
      details: t("events.easter.details"),
      image: "https://images.unsplash.com/photo-1521967663429-271bae24b5b3?auto=format&fit=crop&q=80",
      date: "25 March 2025",
      time: "14:00 - 17:00",
      location: "Slovak Community Center, Manchester",
      category: "cultural",
    },
    {
      id: 2,
      title: t("events.language.title"),
      description: t("events.language.desc"),
      details: t("events.language.details"),
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
      date: "15 April 2025",
      time: "18:30 - 20:00",
      location: "Slovak Community Center, Manchester",
      category: "education",
    },
    {
      id: 3,
      title: t("events.food.title"),
      description: t("events.food.desc"),
      details: t("events.food.details"),
      image: "https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&q=80",
      date: "10 May 2025",
      time: "12:00 - 18:00",
      location: "Platt Fields Park, Manchester",
      category: "cultural",
    },
    {
      id: 4,
      title: t("events.film.title"),
      description: t("events.film.desc"),
      details: t("events.film.details"),
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80",
      date: "22 May 2025",
      time: "19:00 - 21:30",
      location: "Slovak Community Center, Manchester",
      category: "cultural",
    },
    {
      id: 5,
      title: t("events.dance.title"),
      description: t("events.dance.desc"),
      details: t("events.dance.details"),
      image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&q=80",
      date: "5 June 2025",
      time: "18:00 - 20:00",
      location: "Slovak Community Center, Manchester",
      category: "cultural",
    },
    {
      id: 6,
      title: t("events.festival.title"),
      description: t("events.festival.desc"),
      details: t("events.festival.details"),
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
      date: "20 July 2025",
      time: "11:00 - 20:00",
      location: "Heaton Park, Manchester",
      category: "community",
    },
  ]

  // Filter events based on search term and category filter
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filter === "all" || event.category === filter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-white to-accent/10 relative overflow-hidden">
          {/* Parallax background pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230B4EA2' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("events.title")}</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("events.subtitle")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("events.upcoming.title")}</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("events.upcoming.subtitle")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 relative overflow-hidden group" asChild>
                    <Link href="/events/past">
                      <span className="relative z-10">View Past Events</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                  <Button className="bg-accent hover:bg-accent/90 relative overflow-hidden group" asChild>
                    <Link href="/events/host">
                      <span className="relative z-10">Host an Event</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Search and filter controls */}
            <AnimatedSection delay={100}>
              <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("all")}
                    className="transition-all duration-300"
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === "cultural" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("cultural")}
                    className="transition-all duration-300"
                  >
                    Cultural
                  </Button>
                  <Button
                    variant={filter === "education" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("education")}
                    className="transition-all duration-300"
                  >
                    Education
                  </Button>
                  <Button
                    variant={filter === "community" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("community")}
                    className="transition-all duration-300"
                  >
                    Community
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={100 * (index % 3)}>
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          width={500}
                          height={300}
                          alt={event.title}
                          className="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-4 font-medium">{event.details.substring(0, 100)}...</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.details}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group">
                        <span className="relative z-10">{t("events.register")}</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <AnimatedSection>
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No events found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("events.host.title")}</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("events.host.subtitle")}
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full relative overflow-hidden group" size="lg" asChild>
                    <Link href="/events/host">
                      <span className="relative z-10">Host an Event</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
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

