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
import { AnimatedSection } from "@/components/ui/animated-elements"
import { useLanguage } from "@/contexts/language-context"

export default function MembershipPage() {
  const { t } = useLanguage()
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    membershipType: "",
    heardFrom: "friend",
    interests: "",
    facebook: "",
    instagram: "",
    twitter: "",
    termsAccepted: false,
    newsletterOptIn: false,
    volunteerInterest: false,
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Membership Registration</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our Slovak community in South Manchester and help us preserve our cultural heritage.
                  </p>
                </div>
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
                      <CardTitle>Membership Registration Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to become a member of our community.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">Step 1 of 3: Personal Information</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Personal Information</h3>
                          <p className="text-sm text-muted-foreground">Please provide your personal details.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
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
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input
                            id="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                      <Button variant="outline" disabled>
                        Back
                      </Button>
                      <Button
                        className="bg-accent hover:bg-accent/90 text-accent-foreground relative overflow-hidden group"
                        onClick={nextStep}
                      >
                        <span className="relative z-10">Next: Address</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 1 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Membership Registration Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to become a member of our community.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">
                        Step 2 of 3: Address & Membership Details
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Address</h3>
                          <p className="text-sm text-muted-foreground">Please provide your current address.</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address1">Address Line 1</Label>
                          <Input
                            id="address1"
                            placeholder="Enter your street address"
                            value={formData.address1}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                          <Input
                            id="address2"
                            placeholder="Apartment, suite, unit, etc."
                            value={formData.address2}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              placeholder="Enter your city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="postcode">Postcode</Label>
                            <Input
                              id="postcode"
                              placeholder="Enter your postcode"
                              value={formData.postcode}
                              onChange={handleInputChange}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Membership Details</h3>
                          <p className="text-sm text-muted-foreground">
                            Please select your membership type and preferences.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="membershipType">Membership Type</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("membershipType", value)}
                            value={formData.membershipType}
                          >
                            <SelectTrigger
                              id="membershipType"
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            >
                              <SelectValue placeholder="Select membership type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="individual">Individual (£25/year)</SelectItem>
                              <SelectItem value="family">Family (£40/year)</SelectItem>
                              <SelectItem value="student">Student (£15/year)</SelectItem>
                              <SelectItem value="senior">Senior (£15/year)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>How did you hear about us?</Label>
                          <RadioGroup
                            defaultValue="friend"
                            value={formData.heardFrom}
                            onValueChange={(value) => handleSelectChange("heardFrom", value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="friend" id="friend" />
                              <Label htmlFor="friend">Friend or Family</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="social" id="social" />
                              <Label htmlFor="social">Social Media</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="event" id="event" />
                              <Label htmlFor="event">Community Event</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interests">Interests (Optional)</Label>
                          <Textarea
                            id="interests"
                            placeholder="Tell us about your interests in Slovak culture"
                            value={formData.interests}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
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
                        <span className="relative z-10">Next: Final Details</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 2 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Membership Registration Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to become a member of our community.
                      </CardDescription>

                      {/* Progress indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-muted-foreground">Step 3 of 3: Final Details</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Social Media</h3>
                          <p className="text-sm text-muted-foreground">
                            Please provide your social media handles (optional).
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="facebook">Facebook</Label>
                          <Input
                            id="facebook"
                            placeholder="Your Facebook profile"
                            value={formData.facebook}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instagram">Instagram</Label>
                          <Input
                            id="instagram"
                            placeholder="Your Instagram handle"
                            value={formData.instagram}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter">Twitter</Label>
                          <Input
                            id="twitter"
                            placeholder="Your Twitter handle"
                            value={formData.twitter}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="termsAccepted"
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => handleCheckboxChange("termsAccepted", checked)}
                          />
                          <Label htmlFor="termsAccepted" className="text-sm">
                            I agree to the{" "}
                            <Link
                              href="/terms"
                              className="underline underline-offset-2 text-primary hover:text-primary/80 transition-colors"
                            >
                              terms and conditions
                            </Link>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletterOptIn"
                            checked={formData.newsletterOptIn}
                            onCheckedChange={(checked) => handleCheckboxChange("newsletterOptIn", checked)}
                          />
                          <Label htmlFor="newsletterOptIn" className="text-sm">
                            I would like to receive newsletters and updates about events
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="volunteerInterest"
                            checked={formData.volunteerInterest}
                            onCheckedChange={(checked) => handleCheckboxChange("volunteerInterest", checked)}
                          />
                          <Label htmlFor="volunteerInterest" className="text-sm">
                            I am interested in volunteering opportunities
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
                        <span className="relative z-10">Submit Registration</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {formStep === 3 && (
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-center text-primary">Registration Complete!</CardTitle>
                      <CardDescription className="text-center">Thank you for joining our community</CardDescription>
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
                        <h3 className="text-xl font-medium mb-2">Welcome to the Slovak Community!</h3>
                        <p className="text-muted-foreground">
                          Your registration has been submitted successfully. We'll be in touch shortly with confirmation
                          details.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Next Steps:</strong> You'll receive an email with payment instructions for your{" "}
                          {formData.membershipType} membership. Once payment is confirmed, your membership will be
                          activated.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90 relative overflow-hidden group" asChild>
                        <Link href="/">
                          <span className="relative z-10">Return to Homepage</span>
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
      </main>
    </div>
  )
}

