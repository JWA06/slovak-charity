"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SlovakLogo } from "@/components/slovak-logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

/**
 * Navigation data for the Events dropdown menu
 * Each item contains a title, href for navigation, and description
 */
const events: { title: string; href: string; description: string }[] = [
  {
    title: "Upcoming Events",
    href: "/events",
    description: "Browse our calendar of upcoming Slovak cultural events and activities.",
  },
  {
    title: "Past Events",
    href: "/events/past",
    description: "Explore our previous events and community gatherings.",
  },
  {
    title: "Host an Event",
    href: "/events/host",
    description: "Learn how you can organize and host a Slovak community event.",
  },
]

/**
 * Navigation data for the About dropdown menu
 * Each item contains a title, href for navigation, and description
 */
const about: { title: string; href: string; description: string }[] = [
  {
    title: "Our Story",
    href: "/about",
    description: "Learn about our history and mission in the Manchester community.",
  },
  {
    title: "Team",
    href: "/about#team",
    description: "Meet the dedicated volunteers who make our community thrive.",
  },
  {
    title: "Testimonials",
    href: "/about#testimonials",
    description: "Read what our community members have to say about us.",
  },
]

/**
 * SiteHeader Component
 *
 * The main navigation header for the website, featuring:
 * - Logo and site name
 * - Desktop navigation with dropdown menus
 * - Mobile navigation with a slide-out sheet
 * - Language selector
 * - Join button
 */
export function SiteHeader() {
  // State to control the mobile menu open/closed state
  const [isOpen, setIsOpen] = React.useState(false)

  // Get translation function from language context
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <SlovakLogo />
          <span className="hidden font-bold sm:inline-block text-primary">Slovak Community Manchester</span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList className="bg-white rounded-md">
              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground font-medium">{t("nav.about")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    {/* Featured item with gradient background */}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">{t("footer.about")}</div>
                          <p className="text-sm leading-tight text-white/90">{t("home.mission.description")}</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {/* Map through about items to create navigation links */}
                    {about.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Events Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground font-medium">{t("nav.events")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {/* Map through events items to create navigation links */}
                    {events.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Membership Link */}
              <NavigationMenuItem>
                <Link href="/membership" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                    {t("nav.membership")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                    {t("nav.contact")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Gallery Link */}
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Educational Games Link */}
              <NavigationMenuItem>
                <Link href="/educational-games" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                    {t("nav.educational.games")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side items - Language selector and Join button */}
        <div className="hidden md:flex md:items-center md:gap-4 md:ml-auto">
          <LanguageSelector />
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link href="/membership">{t("nav.join")}</Link>
          </Button>
        </div>

        {/* Mobile Navigation - Visible only on mobile */}
        <div className="flex md:hidden ml-auto items-center gap-2">
          <LanguageSelector />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Mobile menu trigger button */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            {/* Mobile slide-out menu */}
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Slovak Community Manchester</SheetTitle>
                <SheetDescription>Uniting and empowering the Slovak community in South Manchester</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {/* Mobile navigation links */}
                <Link href="/about" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  {t("nav.about")}
                </Link>
                <Link href="/events" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  {t("nav.events")}
                </Link>
                <Link
                  href="/membership"
                  className="text-sm font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.membership")}
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  {t("nav.contact")}
                </Link>
                <Link href="/gallery" className="text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  Gallery
                </Link>
                <Link
                  href="/educational-games"
                  className="text-sm font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.educational.games")}
                </Link>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/membership">{t("nav.join")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

/**
 * ListItem Component
 *
 * A reusable component for navigation menu items
 * Displays a title and description with proper styling
 */
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

