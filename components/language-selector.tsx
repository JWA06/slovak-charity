"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

/**
 * LanguageSelector Component
 *
 * A dropdown menu that allows users to switch between available languages.
 * Currently supports English and Slovak.
 * Uses the language context to get and set the current language.
 */
export function LanguageSelector() {
  // Get language context values
  const { language, setLanguage, t } = useLanguage()

  // Local state to control dropdown open/closed state
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Dropdown Trigger Button */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 h-9 px-2 sm:px-3 border-gray-300 text-foreground hover:bg-gray-100"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{t("language")}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent align="end" className="w-40">
        {/* English Option */}
        <DropdownMenuItem
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            setLanguage("en")
            setOpen(false)
          }}
        >
          <span>{t("language.english")}</span>
          {/* Show check mark if English is currently selected */}
          {language === "en" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>

        {/* Slovak Option */}
        <DropdownMenuItem
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            setLanguage("sk")
            setOpen(false)
          }}
        >
          <span>{t("language.slovak")}</span>
          {/* Show check mark if Slovak is currently selected */}
          {language === "sk" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

