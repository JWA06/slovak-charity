import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SlovakLogo } from "@/components/slovak-logo"
import { useLanguage } from "@/contexts/language-context"

/**
 * SiteFooter Component
 *
 * The main footer for the website, featuring:
 * - Organization information
 * - Quick links to main pages
 * - Contact information
 * - Social media links
 * - Support/donation button
 * - Copyright information
 */
export function SiteFooter() {
  // Get translation function from language context
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer content grid - 4 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Organization Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <SlovakLogo width={40} height={30} className="ring-white/20 hover:ring-white/40" />
              <span className="text-lg font-bold text-white">Slovak Community Manchester</span>
            </Link>
            <p className="text-sm text-white/80">
              Uniting and empowering the Slovak community in South Manchester since 2010.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.events")}
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.membership")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {/* Address */}
              <li className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>123 Community Street, Manchester</span>
              </li>
              {/* Phone */}
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+44 123 456 7890</span>
                </a>
              </li>
              {/* Email */}
              <li>
                <a
                  href="mailto:info@slovakcommunity.org"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@slovakcommunity.org</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support and Social Media */}
          <div>
            <h3 className="font-bold mb-4">{t("footer.support")}</h3>
            <p className="text-sm text-white/80 mb-4">{t("footer.support.desc")}</p>
            {/* Donation Button */}
            <Button className="w-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2">
              <Heart className="h-4 w-4" />
              <span>{t("footer.donate")}</span>
            </Button>
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-bold mb-2 text-sm">{t("footer.follow")}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Slovak Community Manchester. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

