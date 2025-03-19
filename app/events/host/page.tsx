"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-elements"
import { useLanguage } from "@/contexts/language-context"

export default function HostEventPage() {
  const { t } = useLanguage()
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    address: "",
    city: "Manchester",
    postcode: "",
    attendees: "",
    requirements: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    additionalInfo: "",
    termsAccepted: false,
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (id, checked) => {
    setFormData((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // For demo purposes, just go to the next step (confirmation)
    nextStep()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-white to-accent/10">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Host an Event</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have an idea for a Slovak cultural event? We'd love to help you bring it to life!
                  </p>
                </div>
                <Button variant="outline" className="mt-4 flex items-center gap-2" asChild>
                  <Link href="/events">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Events
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-8">
              <AnimatedSection>
                {formStep === 0 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Event Proposal Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to propose your Slovak cultural event.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">Step 1 of 3: Event Details</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Event Information</h3>
                          <p className="text-sm text-muted-foreground">Please provide details about your event.</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventName">Event Name</Label>
                          <Input
                            id="eventName"
                            placeholder="Enter the name of your event"
                            value={formData.eventName}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("eventType", value)}
                            value={formData.eventType}
                          >
                            <SelectTrigger
                              id="eventType"
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            >
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cultural">Cultural Celebration</SelectItem>
                              <SelectItem value="workshop">Workshop or Class</SelectItem>
                              <SelectItem value="food">Food Event</SelectItem>
                              <SelectItem value="music">Music or Performance</SelectItem>
                              <SelectItem value="film">Film Screening</SelectItem>
                              <SelectItem value="community">Community Gathering</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Event Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your event, its purpose, and what attendees can expect"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Event Date</Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="attendees">Expected Attendees</Label>
                            <Select
                              onValueChange={(value) => handleSelectChange("attendees", value)}
                              value={formData.attendees}
                            >
                              <SelectTrigger
                                id="attendees"
                                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                              >
                                <SelectValue placeholder="Select expected attendance" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small">Small (up to 20 people)</SelectItem>
                                <SelectItem value="medium">Medium (20-50 people)</SelectItem>
                                <SelectItem value="large">Large (50-100 people)</SelectItem>
                                <SelectItem value="xlarge">Very Large (100+ people)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="startTime">Start Time</Label>
                            <Input
                              id="startTime"
                              type="time"
                              value={formData.startTime}
                              onChange={handleInputChange}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="endTime">End Time</Label>
                            <Input
                              id="endTime"
                              type="time"
                              value={formData.endTime}
                              onChange={handleInputChange}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                      <Button variant="outline" asChild>
                        <Link href="/events">Cancel</Link>
                      </Button>
                      <Button
                        className="bg-accent hover:bg-accent/90 text-accent-foreground relative overflow-hidden group"
                        onClick={nextStep}
                      >
                        <span className="relative z-10">Next: Venue & Requirements</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 1 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Event Proposal Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to propose your Slovak cultural event.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">Step 2 of 3: Venue & Requirements</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Venue Information</h3>
                          <p className="text-sm text-muted-foreground">
                            Please provide details about where you'd like to host your event.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="venue">Venue Preference</Label>
                          <RadioGroup
                            defaultValue="community"
                            value={formData.venue}
                            onValueChange={(value) => handleSelectChange("venue", value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="community" id="community" />
                              <Label htmlFor="community">Slovak Community Center</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="external" id="external" />
                              <Label htmlFor="external">External Venue (please specify address below)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="undecided" id="undecided" />
                              <Label htmlFor="undecided">Undecided (need recommendations)</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        {formData.venue === "external" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="address">Venue Address</Label>
                              <Input
                                id="address"
                                placeholder="Enter the venue address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                  id="city"
                                  placeholder="City"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="postcode">Postcode</Label>
                                <Input
                                  id="postcode"
                                  placeholder="Postcode"
                                  value={formData.postcode}
                                  onChange={handleInputChange}
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                                />
                              </div>
                            </div>
                          </>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="requirements">Special Requirements</Label>
                          <Textarea
                            id="requirements"
                            placeholder="List any special requirements for your event (e.g., audio/visual equipment, seating arrangements, catering needs)"
                            value={formData.requirements}
                            onChange={handleInputChange}
                            className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button
                        className="bg-accent hover:bg-accent/90 text-accent-foreground relative overflow-hidden group"
                        onClick={nextStep}
                      >
                        <span className="relative z-10">Next: Contact Information</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 2 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Event Proposal Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to propose your Slovak cultural event.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">Step 3 of 3: Contact Information</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Contact Information</h3>
                          <p className="text-sm text-muted-foreground">
                            Please provide your contact details so we can discuss your event proposal.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              value={formData.firstName}
                              onChange={handleInputChange}
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
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization (if applicable)</Label>
                          <Input
                            id="organization"
                            placeholder="Enter your organization name"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Any additional information you'd like to share about yourself or your event"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="termsAccepted"
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => handleCheckboxChange("termsAccepted", checked)}
                          />
                          <Label htmlFor="termsAccepted" className="text-sm">
                            I understand that this is a proposal and is subject to review and approval by the Slovak
                            Community Manchester team.
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button
                        className="bg-accent hover:bg-accent/90 text-accent-foreground relative overflow-hidden group"
                        onClick={handleSubmit}
                        disabled={!formData.termsAccepted}
                      >
                        <span className="relative z-10">Submit Proposal</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 3 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-center text-primary">Proposal Submitted!</CardTitle>
                      <CardDescription className="text-center">Thank you for your event proposal</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 text-center">
                      <div className="py-6">
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
                        <h3 className="text-xl font-medium mb-2">Your event proposal has been received!</h3>
                        <p className="text-muted-foreground">
                          We'll review your proposal and get back to you within 3-5 business days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Next Steps:</strong> Our events team will review your proposal and contact you to
                          discuss details, logistics, and potential dates. If you have any questions in the meantime,
                          please contact us at events@slovakcommunity.org.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90 relative overflow-hidden group" asChild>
                        <Link href="/events">
                          <span className="relative z-10">Return to Events</span>
                          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Why Host With Us?</h2>
                  <p className="text-muted-foreground">
                    Hosting an event with Slovak Community Manchester offers numerous benefits:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Access to our established community network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Promotion through our website, social media, and email newsletters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Support with planning, logistics, and resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Potential venue access at reduced or no cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Opportunity to share Slovak culture with a wider audience</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Popular Event Types</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                      <h4 className="font-medium text-primary">Cultural Workshops</h4>
                      <p className="text-sm text-muted-foreground">
                        Teach traditional Slovak crafts, cooking, or other cultural skills
                      </p>
                    </div>
                    <div className="p-4 border border-accent/20 rounded-lg bg-accent/5">
                      <h4 className="font-medium text-accent">Language Exchanges</h4>
                      <p className="text-sm text-muted-foreground">
                        Facilitate conversation between Slovak speakers and those learning the language
                      </p>
                    </div>
                    <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                      <h4 className="font-medium text-primary">Food & Culinary Events</h4>
                      <p className="text-sm text-muted-foreground">
                        Share traditional Slovak cuisine through tastings or cooking demonstrations
                      </p>
                    </div>
                    <div className="p-4 border border-accent/20 rounded-lg bg-accent/5">
                      <h4 className="font-medium text-accent">Music & Dance Performances</h4>
                      <p className="text-sm text-muted-foreground">
                        Showcase traditional or contemporary Slovak music and dance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}

