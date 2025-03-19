"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection, HoverCard } from "@/components/ui/animated-elements"
import { HomeGallery } from "@/components/home-gallery"

/**
 * Home Page Component
 *
 * The main landing page for the Slovak Community Manchester website.
 * Features multiple sections showcasing the community's activities,
 * mission, and cultural heritage.
 */
export default function Home() {
  // Get translation function from language context
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section - With video underneath the title */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center z-10 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn text-primary">{t("home.hero.title")}</h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn text-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            {t("home.hero.subtitle")}
          </p>
        </div>

        {/* Video Container */}
        <div className="container mx-auto px-4 mb-10 z-10">
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Slovak flag colors border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25"></div>

            <div className="relative rounded-xl overflow-hidden aspect-video">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover" controls>
                <source src="/videos/slovak-heritage.mp4" type="video/mp4" />
                <source src="/videos/slovak-heritage.webm" type="video/webm" />
                {/* Fallback image if video doesn't load */}
                <img
                  src="https://images.unsplash.com/photo-1577791465291-47b1e66abd2c?auto=format&fit=crop&q=80"
                  alt="Slovak cultural celebration"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn z-10"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" className="charity-button-accent relative overflow-hidden group" asChild>
            <Link href="/membership">
              <span className="relative z-10">{t("home.hero.join")}</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 relative overflow-hidden group"
            asChild
          >
            <Link href="/events">
              <span className="relative z-10">{t("home.hero.discover")}</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission Section - Explaining the community's purpose */}
      <section className="charity-container bg-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-gradient">{t("home.mission.title")}</h2>
            <p className="text-lg mb-8">{t("home.mission.description")}</p>
            {/* Mission Cards - Three pillars of the community */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Cultural Preservation Card */}
              <AnimatedSection delay={100}>
                <HoverCard className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{t("home.mission.cultural")}</h3>
                  <p className="text-muted-foreground">{t("home.mission.cultural.desc")}</p>
                </HoverCard>
              </AnimatedSection>
              {/* Community Support Card */}
              <AnimatedSection delay={200}>
                <HoverCard className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{t("home.mission.community")}</h3>
                  <p className="text-muted-foreground">{t("home.mission.community.desc")}</p>
                </HoverCard>
              </AnimatedSection>
              {/* Cultural Exchange Card */}
              <AnimatedSection delay={300}>
                <HoverCard className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{t("home.mission.exchange")}</h3>
                  <p className="text-muted-foreground">{t("home.mission.exchange.desc")}</p>
                </HoverCard>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Section - Key numbers about the community */}
      <section className="py-16 charity-pattern">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="stats-grid">
              {/* Members Stat */}
              <div className="stat-card hover-lift">
                <div className="stat-number">200+</div>
                <div className="stat-label">{t("home.stats.members")}</div>
              </div>
              {/* Events Stat */}
              <div className="stat-card hover-lift">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t("home.stats.events")}</div>
              </div>
              {/* Years Stat */}
              <div className="stat-card hover-lift">
                <div className="stat-number">15+</div>
                <div className="stat-label">{t("home.stats.years")}</div>
              </div>
              {/* Lives Touched Stat */}
              <div className="stat-card hover-lift">
                <div className="stat-number">1000+</div>
                <div className="stat-label">{t("home.stats.lives")}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Events Section - Upcoming community events */}
      <section className="charity-container bg-white">
        <AnimatedSection>
          <h2 className="section-title text-gradient">{t("home.events.title")}</h2>
          <p className="section-subtitle">{t("home.events.subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Easter Traditions Event Card */}
            <AnimatedSection delay={100}>
              <div className="event-card charity-card">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1521967663429-271bae24b5b3?auto=format&fit=crop&q=80"
                    alt="Traditional Slovak Easter eggs decoration"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="event-card-overlay" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    March 25, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2">Slovak Easter Traditions</h3>
                  <p className="text-muted-foreground mb-4">Experience traditional Slovak Easter customs and crafts.</p>
                  <Button variant="outline" className="w-full group charity-button-outline" asChild>
                    <Link href="/events" className="flex items-center justify-center">
                      {t("home.events.more")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Language Course Event Card */}
            <AnimatedSection delay={200}>
              <div className="event-card charity-card">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80"
                    alt="Modern classroom setting for language learning"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="event-card-overlay" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    April 15, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2">Slovak Language Course</h3>
                  <p className="text-muted-foreground mb-4">Begin your journey to learning the Slovak language.</p>
                  <Button variant="outline" className="w-full group charity-button-outline" asChild>
                    <Link href="/events" className="flex items-center justify-center">
                      {t("home.events.more")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Food Festival Event Card */}
            <AnimatedSection delay={300}>
              <div className="event-card charity-card">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&q=80"
                    alt="Traditional Slovak food spread"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="event-card-overlay" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    May 10, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2">Slovak Food Festival</h3>
                  <p className="text-muted-foreground mb-4">Savor authentic Slovak cuisine and culinary traditions.</p>
                  <Button variant="outline" className="w-full group charity-button-outline" asChild>
                    <Link href="/events" className="flex items-center justify-center">
                      {t("home.events.more")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
          {/* View All Events Button */}
          <div className="text-center mt-12">
            <Button className="charity-button-primary relative overflow-hidden group" asChild>
              <Link href="/events" className="flex items-center">
                <span className="relative z-10">{t("home.events.all")}</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Photo Gallery Section */}
      <HomeGallery />

      {/* Testimonials Section - Community member quotes */}
      <section className="charity-container bg-slate-50">
        <AnimatedSection>
          <h2 className="section-title text-gradient">{t("home.testimonials.title")}</h2>
          <p className="section-subtitle">{t("home.testimonials.subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <AnimatedSection delay={100}>
              <div className="testimonial-card hover:shadow-lg transition-shadow duration-300">
                <div className="testimonial-quote">"</div>
                <p className="mb-4 text-muted-foreground">
                  Finding the Slovak Community in Manchester has been like discovering a second family. The events and
                  activities help me stay connected to my roots.
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                      alt="Maria K."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Maria K.</div>
                    <div className="text-sm text-muted-foreground">Member since 2020</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonial 2 */}
            <AnimatedSection delay={200}>
              <div className="testimonial-card hover:shadow-lg transition-shadow duration-300">
                <div className="testimonial-quote">"</div>
                <p className="mb-4 text-muted-foreground">
                  The language classes have been fantastic. I've learned so much about Slovak culture and made great
                  friends along the way.
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                      alt="David W."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">David W.</div>
                    <div className="text-sm text-muted-foreground">Language Student</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonial 3 */}
            <AnimatedSection delay={300}>
              <div className="testimonial-card hover:shadow-lg transition-shadow duration-300">
                <div className="testimonial-quote">"</div>
                <p className="mb-4 text-muted-foreground">
                  The community events are always well-organized and full of authentic Slovak spirit. It's a piece of
                  home away from home.
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                      alt="Jana H."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Jana H.</div>
                    <div className="text-sm text-muted-foreground">Regular Attendee</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Get Involved Section - Ways to participate */}
      <section className="charity-container bg-white">
        <AnimatedSection>
          <h2 className="section-title text-gradient">{t("home.involved.title")}</h2>
          <p className="section-subtitle">{t("home.involved.subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Membership Card */}
            <AnimatedSection delay={100}>
              <HoverCard className="p-6 relative overflow-hidden">
                {/* Background Image with low opacity */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80"
                    alt="Community members"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("home.involved.member")}</h3>
                  <p className="text-muted-foreground mb-4">{t("home.involved.member.desc")}</p>
                  <Button className="charity-button-primary w-full relative overflow-hidden group" asChild>
                    <Link href="/membership">
                      <span className="relative z-10">{t("home.involved.member")}</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </HoverCard>
            </AnimatedSection>

            {/* Volunteer Card */}
            <AnimatedSection delay={200}>
              <HoverCard className="p-6 relative overflow-hidden">
                {/* Background Image with low opacity */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                    alt="Volunteers working together"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("home.involved.volunteer")}</h3>
                  <p className="text-muted-foreground mb-4">{t("home.involved.volunteer.desc")}</p>
                  <Button className="charity-button-accent w-full relative overflow-hidden group" asChild>
                    <Link href="/contact">
                      <span className="relative z-10">{t("home.involved.volunteer")}</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </HoverCard>
            </AnimatedSection>

            {/* Donation Card */}
            <AnimatedSection delay={300}>
              <HoverCard className="p-6 relative overflow-hidden">
                {/* Background Image with low opacity */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                    alt="Donation and support"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("home.involved.donate")}</h3>
                  <p className="text-muted-foreground mb-4">{t("home.involved.donate.desc")}</p>
                  <Button className="charity-button-primary w-full relative overflow-hidden group" asChild>
                    <Link href="/contact">
                      <span className="relative z-10">{t("footer.donate")}</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </HoverCard>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Call to Action Section - With background image */}
      <section className="relative py-20">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
        </div>
        {/* CTA Content */}
        <AnimatedSection className="relative container mx-auto px-4 text-center text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 relative overflow-hidden group" asChild>
            <Link href="/membership" className="flex items-center">
              <span className="relative z-10">{t("home.cta.button")}</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </>
  )
}

