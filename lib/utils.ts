import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to conditionally join class names
 *
 * This function combines clsx and tailwind-merge to:
 * 1. Allow conditional class names with clsx
 * 2. Properly merge Tailwind CSS classes with twMerge
 *
 * Example usage:
 * cn('fixed inset-0', isOpen && 'bg-black/50', className)
 *
 * @param {...ClassValue[]} inputs - Class names or conditional expressions
 * @returns {string} - Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

