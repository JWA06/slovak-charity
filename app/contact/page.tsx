"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Facebook } from "lucide-react"
import { AnimatedSection, HoverCard } from "@/components/ui/animated-elements"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get in touch with our team. We'd love to hear from you!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                    <p className="text-muted-foreground">
                      Have questions about our community, events, or how to get involved? We're here to help!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <HoverCard className="flex items-start space-x-4 p-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Slovak Community Center
                          <br />
                          123 Community Street
                          <br />
                          Manchester, M15 6AB
                        </p>
                      </div>
                    </HoverCard>

                    <HoverCard className="flex items-start space-x-4 p-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:svcmanchester@yahoo.com" className="hover:underline text-primary">
                            svcmanchester@yahoo.com
                          </a>
                        </p>
                      </div>
                    </HoverCard>

                    <HoverCard className="flex items-start space-x-4 p-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+447546920400" className="hover:underline text-primary">
                            07546 920400
                          </a>
                        </p>
                      </div>
                    </HoverCard>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/people/Slovensk%C3%A9-Vzdel%C3%A1vacie-Centrum-South-Manchester/61557468560704/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </div>
                  </div>

                  <HoverCard className="flex items-start space-x-4 p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Educational Resources</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://slovake.eu/en/learning/games"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-primary"
                        >
                          Educational Games - Learn Slovak through interactive games
                        </a>
                      </p>
                    </div>
                  </HoverCard>

                  <HoverCard className="p-6">
                    <h3 className="font-medium mb-4">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="font-medium">Monday - Friday</div>
                      <div>10:00 - 18:00</div>
                      <div className="font-medium">Saturday</div>
                      <div>10:00 - 16:00</div>
                      <div className="font-medium">Sunday</div>
                      <div>Closed</div>
                    </div>
                  </HoverCard>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="subject">Subject</Label>
                          <Select onValueChange={handleSelectChange} value={formData.subject}>
                            <SelectTrigger
                              id="subject"
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            >
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="membership">Membership</SelectItem>
                              <SelectItem value="events">Events</SelectItem>
                              <SelectItem value="volunteer">Volunteering</SelectItem>
                              <SelectItem value="donation">Donations</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Enter your message"
                            className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mt-6">
                          <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group"
                            disabled={isSubmitting}
                          >
                            <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Community Center</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our community center is located in Sale, South Manchester.
                  </p>
                </div>
                <div className="w-full max-w-4xl rounded-lg overflow-hidden border shadow-lg group transition-all duration-500 hover:shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19076.998040655484!2d-2.3507366659874164!3d53.42509325941249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0e6fb37c15%3A0x6a4b3f8cd3be2e96!2sSale%2C%20UK!5e0!3m2!1sen!2sus!4v1710766008045!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg transition-transform duration-700 group-hover:scale-105"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}

