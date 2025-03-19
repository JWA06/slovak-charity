import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/contexts/language-context"

/**
 * Load the Inter font with Latin subset
 * This is optimized by Next.js for performance
 */
const inter = Inter({ subsets: ["latin"] })

/**
 * Metadata for the website
 * Used by search engines and social media platforms
 */
export const metadata: Metadata = {
  title: "Slovak Community Manchester",
  description: "Uniting and empowering the Slovak community in South Manchester and surrounding areas.",
    generator: 'v0.dev'
}

/**
 * RootLayout Component
 *
 * The base layout that wraps all pages in the application.
 * Includes:
 * - Font setup
 * - Language provider for translations
 * - Site header
 * - Main content area
 * - Site footer
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap everything in the language provider for translations */}
        <LanguageProvider>
          {/* Site header with navigation */}
          <SiteHeader />

          {/* Main content area */}
          <main className="min-h-screen">{children}</main>

          {/* Site footer */}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'