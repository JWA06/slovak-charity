import { cn } from "@/lib/utils"

/**
 * Props for the SlovakLogo component
 */
interface SlovakLogoProps {
  className?: string // Additional CSS classes
  width?: number // Width of the logo in pixels
  height?: number // Height of the logo in pixels
}

/**
 * SlovakLogo Component
 *
 * Renders an SVG representation of the Slovak flag in a stylized format.
 * The logo is responsive and can be customized with width, height, and additional classes.
 *
 * @param {SlovakLogoProps} props - Component props
 * @returns {JSX.Element} - The rendered logo component
 */
export function SlovakLogo({ className, width = 48, height = 32 }: SlovakLogoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm ring-2 ring-primary/20 hover:ring-primary/40 transition-all",
        className,
      )}
      style={{ width, height }}
    >
      {/* SVG representation of the Slovak flag */}
      <svg viewBox="0 0 900 600" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* White background */}
        <rect width="900" height="600" fill="#ffffff" />
        {/* Blue stripe (top) */}
        <rect width="900" height="200" y="0" fill="#0b4ea2" />
        {/* Red stripe (bottom) */}
        <rect width="900" height="200" y="400" fill="#ee1c25" />
        {/* Coat of arms shape */}
        <path d="M 225,200 h 450 v 200 h -450 z M 225,200 Q 425,300 225,400 z" fill="#ffffff" />
        <path d="M 225,200 Q 425,300 225,400 Q 425,300 625,400 Q 425,300 625,200 Q 425,300 225,200" fill="#0b4ea2" />
        {/* Red circle in the center of the coat of arms */}
        <circle cx="425" cy="300" r="45" fill="#ee1c25" />
      </svg>
    </div>
  )
}

