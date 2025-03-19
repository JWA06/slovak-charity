"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, ChevronDown, ChevronUp, BookOpen, School, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

// Component for animated section that fades in when scrolled into view
const AnimatedSection = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Collapsible section component
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border rounded-lg overflow-hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

// Interactive feature card
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("mission")

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">{t("about.title")}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.subtitle")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <AnimatedSection delay={200}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    {t("about.story.title")}
                  </h2>
                  <p className="text-muted-foreground md:text-xl">{t("about.story.p1")}</p>
                  <p className="text-muted-foreground md:text-xl">{t("about.story.p2")}</p>
                  <p className="text-muted-foreground md:text-xl">{t("about.story.p3")}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Image
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80"
                width={550}
                height={550}
                alt="Community gathering at Slovak cultural event"
                className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="mission" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="mission" className="text-sm sm:text-base">
                  Our Mission
                </TabsTrigger>
                <TabsTrigger value="journey" className="text-sm sm:text-base">
                  Our Journey
                </TabsTrigger>
                <TabsTrigger value="offerings" className="text-sm sm:text-base">
                  Our Offerings
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mission" className="space-y-6">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient text-center mb-8">
                  Our Mission
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-lg text-muted-foreground">
                    At Slovenské Vzdelávacie Centrum – South Manchester, our mission goes beyond just teaching the
                    Slovak language. We are here to keep our heritage alive, to ensure that children growing up abroad
                    don't lose their connection to their roots, and to create a place where Slovak culture thrives—even
                    far from home.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We believe that language is more than just words; it carries identity, history, and a sense of
                    belonging. Through our work, we bring Slovak-speaking families together, helping them build
                    friendships, strengthen their cultural ties, and feel at home even while living in the UK.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Education is at the heart of what we do, but our purpose extends even further. We are here to bridge
                    the gap between the UK and Slovak education systems, ensuring that children who may one day return
                    to Slovakia can transition smoothly. We are here to support families, guide them, and make sure no
                    one feels lost when navigating life between two countries.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Above all, we are here to create a community—one that welcomes, supports, and celebrates Slovak
                    language, traditions, and the people who cherish them.
                  </p>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="journey" className="space-y-6">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient text-center mb-8">
                  Our Journey
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent ml-6 md:ml-8"></div>
                    <div className="space-y-12">
                      <div className="relative pl-16 md:pl-20">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                          <span className="font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                        <p className="text-muted-foreground">
                          Slovenské Vzdelávacie Centrum – South Manchester was founded by a group of dedicated teachers
                          who shared a common vision—to establish a Slovak educational and cultural centre that truly
                          makes a difference.
                        </p>
                      </div>
                      <div className="relative pl-16 md:pl-20">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                          <span className="font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Building the Foundation</h3>
                        <p className="text-muted-foreground">
                          With a passion for teaching, culture, and community-building, we worked tirelessly to create a
                          space where Slovak families could access quality education and cultural activities.
                        </p>
                      </div>
                      <div className="relative pl-16 md:pl-20">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                          <span className="font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Official Recognition</h3>
                        <p className="text-muted-foreground">
                          After months of hard work, we were proud to become a registered charity on 9th September 2024,
                          marking a significant step in our journey. Our official launch on 15th September was a proud
                          moment, celebrated in collaboration with the Faculty of Education from Univerzita Mateja Bela
                          and the Association of Slovak Schools and Community Centres in the UK.
                        </p>
                      </div>
                      <div className="relative pl-16 md:pl-20">
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                          <span className="font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Growing Together</h3>
                        <p className="text-muted-foreground">
                          Since then, we have continued to grow, supporting Slovak-speaking families, students, and
                          individuals who wish to learn, connect, and celebrate Slovak culture together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="offerings" className="space-y-6">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient text-center mb-8">
                  What We Offer & How We Help
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                  <p className="text-lg text-muted-foreground">
                    At Slovenské Vzdelávacie Centrum – South Manchester, we provide Slovak language education, organise
                    cultural events, and support Slovak-speaking families in navigating life between the UK and
                    Slovakia. Whether you're here to learn, stay connected to your roots, or find support, we are here
                    for you.
                  </p>

                  <CollapsibleSection title="What We Offer" defaultOpen={true}>
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">
                        We run Saturday Slovak language lessons for children and adults, as well as cultural and
                        community activities:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 flex items-center space-x-3">
                          <School className="h-8 w-8 text-primary" />
                          <div>
                            <h4 className="font-medium">Morning Classes</h4>
                            <p className="text-sm">10:00 – 12:00 at The Firs Primary School</p>
                          </div>
                        </div>
                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/20 flex items-center space-x-3">
                          <School className="h-8 w-8 text-accent" />
                          <div>
                            <h4 className="font-medium">Afternoon Classes</h4>
                            <p className="text-sm">14:00 – 16:00 at Sale High School</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mt-4">Our programs include:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FeatureCard
                          icon={BookOpen}
                          title="Slovak Language Lessons"
                          description="Engaging and structured classes for children and adults"
                        />
                        <FeatureCard
                          icon={School}
                          title="Adapted Teaching Methods"
                          description="Incorporating UK educational practices for a smooth learning experience"
                        />
                        <FeatureCard
                          icon={Heart}
                          title="Cultural Events & Workshops"
                          description="Celebrating Slovak traditions through interactive activities"
                        />
                        <FeatureCard
                          icon={Users}
                          title="Community Gatherings"
                          description="Opportunities to meet, connect, and build lasting friendships"
                        />
                        <FeatureCard
                          icon={Globe}
                          title="Opportunities for Adults"
                          description="Not just for kids! Adults can join workshops and networking events"
                        />
                      </div>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="How We Help">
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">
                        Beyond education and cultural events, we offer practical support for Slovak-speaking families
                        navigating life in the UK or transitioning back to Slovakia:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">1</span>
                          </div>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">Support for 'Komisionálne Skúšky'</strong> – Helping
                            children maintain their Slovak academic level
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">2</span>
                          </div>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">Guidance for Families Returning to Slovakia</strong> –
                            Assisting with smooth school transitions and legal advice
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">3</span>
                          </div>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">Bridging the UK & Slovak Education Systems</strong> –
                            Providing resources to fill the gaps between the two
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">4</span>
                          </div>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">Legal & Administrative Advice</strong> – Helping
                            families understand UK legal processes and requirements
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-primary text-sm font-bold">5</span>
                          </div>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">English Language Support</strong> – Assisting Slovak
                            families who need help with English language and Translation/Interpreting services
                          </span>
                        </li>
                      </ul>

                      <p className="text-lg text-muted-foreground mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                        Whether you're looking for education, community, or guidance, we are here to help you stay
                        connected to your Slovak roots while providing the support you need.
                      </p>
                    </div>
                  </CollapsibleSection>
                </div>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">
                  {t("about.team.title")}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Slovenské Vzdelávacie Centrum – South Manchester, we are proud to be led by a team of experienced
                  educators and charity trustees who are passionate about Slovak language, culture, and education. With
                  backgrounds in both the Slovak and UK education systems, we are dedicated to providing high-quality
                  learning experiences and fostering a strong Slovak community abroad.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Each of us shares the same vision—to create a space where Slovak heritage is preserved, language is
                  celebrated, and families feel supported in their bilingual journey.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-5xl space-y-16 py-12">
            {/* Team Member 1 */}
            <AnimatedSection delay={200}>
              <div className="group relative overflow-hidden rounded-xl p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
                <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
                        fill
                        alt="Mgr. Mária Mušutová - Co-Founder & Chair"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Mgr. Mária Mušutová</h3>
                      <p className="text-sm text-primary font-medium">Co-Founder | Chair of the Charity | Trustee</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Originally from Orava region in Slovakia, Mária has lived in Manchester for 17 years and holds a
                      PGCE degree in Modern Foreign Languages from Manchester Metropolitan University. She currently
                      works as a Spanish and French teacher at a secondary school while also offering private Slovak
                      lessons and translation services.
                    </p>
                    <p className="text-muted-foreground">
                      As a Slovak mother abroad, Mária is deeply committed to ensuring her daughter grows up speaking
                      Slovak and understanding her cultural heritage. This passion led her to co-found the centre and
                      establish it as a registered charity, bringing together families who share the same goal.
                    </p>
                    <p className="text-muted-foreground">
                      Mária is responsible for developing the Slovak language curriculum for all ages, ensuring that
                      students of various backgrounds and abilities receive structured and engaging lessons. She also
                      leads and teaches the morning (AM) session, where she works with a diverse group of learners,
                      ranging from young children (4 years old) to English-speaking adults learning Slovak as a second
                      language.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">At SVC-SM, Mária focuses on:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Chairing the charity and overseeing its development</li>
                        <li>Developing the curriculum for Slovak as a second language across all age groups</li>
                        <li>Leading and teaching the AM session for mixed-ability students (ages 4+ to adults)</li>
                        <li>Managing administrative tasks and charity operations</li>
                        <li>Organising cultural events, trips, and workshops</li>
                      </ul>
                    </div>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "Slovenské Vzdelávacie Centrum - South Manchester allows us to unite the Slovak community, share
                      educational and cultural opportunities, and build lifelong friendships with those who cherish our
                      traditions."
                    </blockquote>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Team Member 2 */}
            <AnimatedSection delay={400}>
              <div className="group relative overflow-hidden rounded-xl p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
                <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                        fill
                        alt="Mgr. Denisa Amini - Co-Founder & Trustee"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Mgr. Denisa Amini</h3>
                      <p className="text-sm text-primary font-medium">
                        Co-Founder | Trustee | International School Educator
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Originally from Prešov, Denisa spent nearly 20 years living in Manchester before moving back to
                      Slovakia, where she now works at an International School in Košice.
                    </p>
                    <p className="text-muted-foreground">
                      With a degree in History and Civics Education, Denisa has always been passionate about bridging
                      the Slovak and UK education systems. From her position in Košice, she actively supports SVC-SM by
                      developing partnerships with Slovak schools and projects, helping families prepare for a smooth
                      transition back to Slovakia.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">At SVC-SM, Denisa is dedicated to:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Providing first-hand advice for families returning to Slovakia</li>
                        <li>Supporting students transitioning between Slovak and UK education systems</li>
                        <li>Developing partnerships with Slovak schools and educational institutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">
                  {t("about.join.title")}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.join.subtitle")}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full charity-button-primary relative overflow-hidden group" size="lg" asChild>
                  <Link href="/membership">
                    <span className="relative z-10">{t("about.join.button")}</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

