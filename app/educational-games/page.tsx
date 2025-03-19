"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Gamepad2 } from "lucide-react"
import { AnimatedSection, CollapsibleSection } from "@/components/ui/animated-elements"
import { useLanguage } from "@/contexts/language-context"

export default function EducationalGamesPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("language")

  // Educational games data
  const games = {
    language: [
      {
        id: "vocab-match",
        title: t("educational.games.vocab.title"),
        description: t("educational.games.vocab.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://slovake.eu/en/learning/games/hangman",
        level: t("educational.games.level.beginner"),
      },
      {
        id: "word-search",
        title: t("educational.games.wordsearch.title"),
        description: t("educational.games.wordsearch.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://slovake.eu/en/learning/games/wordsearch",
        level: t("educational.games.level.intermediate"),
      },
      {
        id: "sentence-builder",
        title: t("educational.games.sentence.title"),
        description: t("educational.games.sentence.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://slovake.eu/en/learning/games/sentence",
        level: t("educational.games.level.advanced"),
      },
    ],
    culture: [
      {
        id: "traditions-quiz",
        title: t("educational.games.traditions.title"),
        description: t("educational.games.traditions.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://www.sporcle.com/games/g/slovakia",
        level: t("educational.games.level.all"),
      },
      {
        id: "geography-game",
        title: t("educational.games.geography.title"),
        description: t("educational.games.geography.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://online.seterra.com/en/vgp/3083",
        level: t("educational.games.level.all"),
      },
      {
        id: "history-timeline",
        title: t("educational.games.history.title"),
        description: t("educational.games.history.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://www.ducksters.com/games/timeline_game.php",
        level: t("educational.games.level.intermediate"),
      },
    ],
    children: [
      {
        id: "coloring-pages",
        title: t("educational.games.coloring.title"),
        description: t("educational.games.coloring.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://www.coloringpages.net/countries/slovakia-coloring-pages.html",
        level: t("educational.games.level.beginner"),
      },
      {
        id: "memory-game",
        title: t("educational.games.memory.title"),
        description: t("educational.games.memory.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://www.memozor.com/memory-games",
        level: t("educational.games.level.beginner"),
      },
      {
        id: "fairy-tales",
        title: t("educational.games.fairytales.title"),
        description: t("educational.games.fairytales.desc"),
        image: "/placeholder.svg?height=300&width=500",
        link: "https://www.youtube.com/playlist?list=PLVkDULzLN1UJpq_-i7A9PQkFsK_4UwC_e",
        level: t("educational.games.level.beginner"),
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-white to-accent/10">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("educational.games.title")}</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("educational.games.subtitle")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="language" className="w-full" onValueChange={setActiveTab}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="language" className="text-sm sm:text-base">
                    {t("educational.games.tab.language")}
                  </TabsTrigger>
                  <TabsTrigger value="culture" className="text-sm sm:text-base">
                    {t("educational.games.tab.culture")}
                  </TabsTrigger>
                  <TabsTrigger value="children" className="text-sm sm:text-base">
                    {t("educational.games.tab.children")}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="language" className="space-y-6">
                <AnimatedSection>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {games.language.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="culture" className="space-y-6">
                <AnimatedSection>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {games.culture.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="children" className="space-y-6">
                <AnimatedSection>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {games.children.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                {t("educational.games.help.title")}
              </h2>

              <div className="max-w-3xl mx-auto space-y-6">
                <CollapsibleSection title={t("educational.games.help.getting.title")}>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{t("educational.games.help.getting.desc")}</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>{t("educational.games.help.getting.step1")}</li>
                      <li>{t("educational.games.help.getting.step2")}</li>
                      <li>{t("educational.games.help.getting.step3")}</li>
                      <li>{t("educational.games.help.getting.step4")}</li>
                    </ol>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title={t("educational.games.help.difficulty.title")}>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{t("educational.games.help.difficulty.desc")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                        <h4 className="font-medium text-primary">{t("educational.games.level.beginner")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("educational.games.help.difficulty.beginner")}
                        </p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                        <h4 className="font-medium text-primary">{t("educational.games.level.intermediate")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("educational.games.help.difficulty.intermediate")}
                        </p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                        <h4 className="font-medium text-primary">{t("educational.games.level.advanced")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("educational.games.help.difficulty.advanced")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title={t("educational.games.help.resources.title")}>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{t("educational.games.help.resources.desc")}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <a
                          href="https://slovake.eu/en/learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Slovake.eu - Learn Slovak Online
                        </a>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <a
                          href="https://www.loecsen.com/en/learn-slovak"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Loecsen - Basic Slovak Phrases
                        </a>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <a
                          href="https://www.memrise.com/courses/english/slovak/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Memrise - Slovak Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {t("educational.games.create.title")}
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("educational.games.create.subtitle")}
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full charity-button-primary relative overflow-hidden group" size="lg" asChild>
                    <Link href="/contact">
                      <span className="relative z-10">{t("educational.games.create.button")}</span>
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

// Game Card Component
function GameCard({ game }) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">{game.level}</div>
      </div>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>{game.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Gamepad2 className="h-4 w-4 mr-2 text-primary" />
          <span>{t("educational.games.interactive")}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group" asChild>
          <a href={game.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <span className="relative z-10">{t("educational.games.play")}</span>
            <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

