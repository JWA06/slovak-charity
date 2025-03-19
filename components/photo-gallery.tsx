"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-elements"

interface Photo {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  date?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  title?: string
  description?: string
  columns?: 2 | 3 | 4
  className?: string
}

export function PhotoGallery({ photos, title, description, columns = 3, className = "" }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const goToPrevious = () => {
    const newIndex = (selectedIndex - 1 + photos.length) % photos.length
    setSelectedPhoto(photos[newIndex])
    setSelectedIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (selectedIndex + 1) % photos.length
    setSelectedPhoto(photos[newIndex])
    setSelectedIndex(newIndex)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <div className={`w-full ${className}`} onKeyDown={handleKeyDown} tabIndex={0}>
      {(title || description) && (
        <div className="mb-6 text-center">
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-4`}>
        {photos.map((photo, index) => (
          <AnimatedSection key={photo.id} delay={index * 100} className="h-full">
            <div
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(photo, index)}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                {photo.title && (
                  <div className="p-4 text-white">
                    <h3 className="font-medium">{photo.title}</h3>
                    {photo.date && <p className="text-sm opacity-80">{photo.date}</p>}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black/90 border-none">
          <div className="relative h-[80vh] w-full">
            {selectedPhoto && (
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-black/20 z-50"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-50"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-50"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          {selectedPhoto && (selectedPhoto.title || selectedPhoto.description) && (
            <DialogHeader className="p-4 bg-black text-white">
              {selectedPhoto.title && <DialogTitle>{selectedPhoto.title}</DialogTitle>}
              {selectedPhoto.description && (
                <DialogDescription className="text-gray-300">{selectedPhoto.description}</DialogDescription>
              )}
              {selectedPhoto.date && <p className="text-sm text-gray-400 mt-1">{selectedPhoto.date}</p>}
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

