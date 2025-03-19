"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

/**
 * Type definition for supported languages
 */
type Language = "en" | "sk"

/**
 * Type definition for the language context
 * Includes current language, setter function, and translation function
 */
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

/**
 * Translation dictionary
 * Contains all text strings in both English and Slovak
 * Organized by section and usage
 */
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.events": "Events",
    "nav.membership": "Membership",
    "nav.contact": "Contact",
    "nav.join": "Join Us",
    "nav.educational.games": "Educational Games",

    // Home page
    "home.hero.title": "Celebrating Slovak Culture in Manchester",
    "home.hero.subtitle":
      "Join our vibrant community and experience the rich traditions, warm hospitality, and cultural heritage of Slovakia.",
    "home.hero.join": "Join Our Community",
    "home.hero.discover": "Discover Events",

    "home.mission.title": "Our Mission",
    "home.mission.description":
      "The Slovak Community in Manchester is dedicated to preserving and celebrating Slovak culture, providing support to Slovaks living in the UK, and building bridges between our community and the wider Manchester area.",
    "home.mission.cultural": "Cultural Preservation",
    "home.mission.cultural.desc":
      "Keeping Slovak traditions alive through events, workshops, and educational programs.",
    "home.mission.community": "Community Support",
    "home.mission.community.desc": "Providing resources, guidance, and a sense of belonging to Slovaks in Manchester.",
    "home.mission.exchange": "Cultural Exchange",
    "home.mission.exchange.desc": "Sharing Slovak culture with the wider Manchester community through public events.",

    "home.stats.members": "Active Members",
    "home.stats.events": "Annual Events",
    "home.stats.years": "Years of Community",
    "home.stats.lives": "Lives Touched",

    "home.events.title": "Upcoming Events",
    "home.events.subtitle": "Join us for these exciting upcoming events and experience Slovak culture firsthand.",
    "home.events.more": "Learn More",
    "home.events.all": "View All Events",

    "home.testimonials.title": "Community Voices",
    "home.testimonials.subtitle": "Hear from our members about the impact our community has had on their lives.",

    "home.involved.title": "Get Involved",
    "home.involved.subtitle": "There are many ways to support our mission and become part of our community.",
    "home.involved.member": "Become a Member",
    "home.involved.member.desc":
      "Join our community and enjoy member benefits including event discounts, networking opportunities, and more.",
    "home.involved.volunteer": "Volunteer With Us",
    "home.involved.volunteer.desc":
      "Share your skills and time to help organize events, teach classes, or support our administrative needs.",
    "home.involved.donate": "Make a Donation",
    "home.involved.donate.desc":
      "Support our programs and initiatives with a one-time or recurring donation to help us continue our work.",

    "home.cta.title": "Join Our Growing Community",
    "home.cta.subtitle":
      "Become a member today and be part of our vibrant Slovak community in Manchester. Experience the rich culture, make new friends, and create lasting memories.",
    "home.cta.button": "Become a Member",

    "home.cultural.title": "Slovak Cultural Heritage",
    "home.cultural.subtitle": "Explore the rich traditions and cultural elements that make Slovakia unique.",
    "home.cultural.architecture": "Architecture",
    "home.cultural.costumes": "Folk Costumes",
    "home.cultural.cuisine": "Cuisine",
    "home.cultural.music": "Music & Dance",

    // About page
    "about.title": "About Us",
    "about.subtitle":
      "Learn about our mission, history, and the dedicated team behind the Slovak Community in South Manchester.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Slovenské Vzdelávacie Centrum – South Manchester is a registered charity dedicated to preserving and promoting Slovak language and culture.",
    "about.story.p2":
      "We provide Slovak language education and organize cultural and community activities to help Slovak-speaking families maintain their heritage while living abroad. While our primary focus is on supporting Slovak-speaking children and families, we warmly welcome anyone interested in learning the Slovak language and engaging with our traditions.",
    "about.story.p3":
      "We offer various workshops, events, and social activities where individuals of all ages can connect, learn, and take part in our cultural community.",
    "about.mission.title": "Our Mission & Values",
    "about.mission.subtitle":
      "We are guided by our commitment to cultural preservation, community support, and education.",
    "about.cultural": "Cultural Preservation",
    "about.cultural.desc":
      "We are committed to preserving and celebrating Slovak traditions, language, and heritage for future generations.",
    "about.community": "Community Support",
    "about.community.desc":
      "We provide a supportive network for Slovaks living in South Manchester, helping them navigate life in the UK.",
    "about.education": "Education",
    "about.education.desc":
      "We offer educational programs for both children and adults to learn about Slovak culture, history, and language.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the dedicated volunteers who make our community thrive.",
    "about.join.title": "Join Our Community",
    "about.join.subtitle": "Become a member of our Slovak community and help us preserve our cultural heritage.",
    "about.join.button": "Sign Up Today",

    // Events page
    "events.title": "Events & Workshops",
    "events.subtitle": "Join us for our upcoming cultural events, workshops, and community gatherings.",
    "events.upcoming.title": "Upcoming Events",
    "events.upcoming.subtitle": "Don't miss out on our exciting events. Mark your calendars!",
    "events.easter.title": "Slovak Easter Traditions Workshop",
    "events.easter.desc": "Learn about traditional Slovak Easter customs",
    "events.easter.details":
      "Join us for an afternoon of traditional Slovak Easter customs. Learn about egg decorating techniques, traditional foods, and the cultural significance of Easter in Slovakia.",
    "events.language.title": "Slovak Language Class for Beginners",
    "events.language.desc": "Start your journey to learning Slovak",
    "events.language.details":
      "This beginner-friendly class will introduce you to the basics of the Slovak language. No prior knowledge required. Materials will be provided.",
    "events.food.title": "Slovak Food Festival",
    "events.food.desc": "Taste the flavors of Slovakia",
    "events.food.details":
      "Experience the rich culinary traditions of Slovakia. Sample traditional dishes, watch cooking demonstrations, and learn recipes to try at home.",
    "events.film.title": "Slovak Film Night",
    "events.film.desc": "Contemporary Slovak cinema",
    "events.film.details":
      "Join us for a screening of award-winning Slovak films with English subtitles. Discussion and refreshments to follow.",
    "events.dance.title": "Slovak Folk Dance Workshop",
    "events.dance.desc": "Learn traditional Slovak dances",
    "events.dance.details":
      "Experience the joy of Slovak folk dancing. No previous dance experience required. Comfortable clothing and shoes recommended.",
    "events.festival.title": "Slovak Summer Festival",
    "events.festival.desc": "Annual celebration of Slovak culture",
    "events.festival.details":
      "Our biggest event of the year! Join us for a day of music, dance, food, crafts, and activities for all ages. Celebrate Slovak culture with the whole family.",
    "events.host.title": "Want to Host an Event?",
    "events.host.subtitle": "If you have an idea for a Slovak cultural event or workshop, we'd love to hear from you!",
    "events.register": "Register",

    // Membership page
    "membership.title": "Membership Registration",
    "membership.subtitle": "Join our Slovak community in South Manchester and help us preserve our cultural heritage.",
    "membership.form.title": "Membership Registration Form",
    "membership.form.desc": "Please fill out the form below to become a member of our community.",
    "membership.personal.title": "Personal Information",
    "membership.personal.desc": "Please provide your personal details.",
    "membership.first.name": "First Name",
    "membership.last.name": "Last Name",
    "membership.email": "Email",
    "membership.phone": "Phone Number",
    "membership.dob": "Date of Birth",
    "membership.address.title": "Address",
    "membership.address.desc": "Please provide your current address.",
    "membership.address1": "Address Line 1",
    "membership.address2": "Address Line 2 (Optional)",
    "membership.city": "City",
    "membership.postcode": "Postcode",
    "membership.details.title": "Membership Details",
    "membership.details.desc": "Please select your membership type and preferences.",
    "membership.type": "Membership Type",
    "membership.type.individual": "Individual (£25/year)",
    "membership.type.family": "Family (£40/year)",
    "membership.type.student": "Student (£15/year)",
    "membership.type.senior": "Senior (£15/year)",
    "membership.hear": "How did you hear about us?",
    "membership.hear.friend": "Friend or Family",
    "membership.hear.social": "Social Media",
    "membership.hear.event": "Community Event",
    "membership.hear.other": "Other",
    "membership.interests": "Interests (Optional)",
    "membership.interests.placeholder": "Tell us about your interests in Slovak culture",
    "membership.social.title": "Social Media",
    "membership.social.desc": "Please provide your social media handles (optional).",
    "membership.facebook": "Facebook",
    "membership.instagram": "Instagram",
    "membership.twitter": "Twitter",
    "membership.terms": "I agree to the terms and conditions",
    "membership.newsletter": "I would like to receive newsletters and updates about events",
    "membership.volunteer": "I am interested in volunteering opportunities",
    "membership.cancel": "Cancel",
    "membership.submit": "Submit Registration",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team. We'd love to hear from you!",
    "contact.get.title": "Get in Touch",
    "contact.get.desc": "Have questions about our community, events, or how to get involved? We're here to help!",
    "contact.address": "Address",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.follow": "Follow Us",
    "contact.hours.title": "Opening Hours",
    "contact.hours.weekday": "Monday - Friday",
    "contact.hours.weekday.time": "10:00 - 18:00",
    "contact.hours.saturday": "Saturday",
    "contact.hours.saturday.time": "10:00 - 16:00",
    "contact.hours.sunday": "Sunday",
    "contact.hours.sunday.time": "Closed",
    "contact.form.title": "Send us a Message",
    "contact.form.desc": "Fill out the form below and we'll get back to you as soon as possible.",
    "contact.subject": "Subject",
    "contact.subject.general": "General Inquiry",
    "contact.subject.membership": "Membership",
    "contact.subject.events": "Events",
    "contact.subject.volunteer": "Volunteering",
    "contact.subject.donation": "Donations",
    "contact.subject.other": "Other",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.visit.title": "Visit Our Community Center",
    "contact.visit.desc": "Our community center is located in the heart of South Manchester.",

    // Footer
    "footer.about": "About Us",
    "footer.events": "Events",
    "footer.membership": "Membership",
    "footer.contact": "Contact",
    "footer.support": "Support Our Mission",
    "footer.support.desc": "Help us continue supporting the Slovak community through your generous donations.",
    "footer.donate": "Donate Now",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Common
    select: "Select",
    "enter.first.name": "Enter your first name",
    "enter.last.name": "Enter your last name",
    "enter.email": "Enter your email",
    "enter.phone": "Enter your phone number",
    "enter.street": "Enter your street address",
    "enter.apt": "Apartment, suite, unit, etc.",
    "enter.city": "Enter your city",
    "enter.postcode": "Enter your postcode",
    "enter.facebook": "Your Facebook profile",
    "enter.instagram": "Your Instagram handle",
    "enter.twitter": "Your Twitter handle",
    "enter.message": "Enter your message",
    terms: "terms and conditions",

    // Language selector
    language: "Language",
    "language.english": "English",
    "language.slovak": "Slovak",

    "educational.games.title": "Educational Games",
    "educational.games.subtitle": "Learn Slovak language and culture through interactive games and activities",
    "educational.games.tab.language": "Language Games",
    "educational.games.tab.culture": "Cultural Games",
    "educational.games.tab.children": "Children's Games",
    "educational.games.play": "Play Game",
    "educational.games.interactive": "Interactive Learning",

    "educational.games.vocab.title": "Vocabulary Match",
    "educational.games.vocab.desc": "Match Slovak words with their English translations",
    "educational.games.wordsearch.title": "Word Search",
    "educational.games.wordsearch.desc": "Find Slovak words hidden in a grid of letters",
    "educational.games.sentence.title": "Sentence Builder",
    "educational.games.sentence.desc": "Arrange words to form correct Slovak sentences",

    "educational.games.traditions.title": "Slovak Traditions Quiz",
    "educational.games.traditions.desc": "Test your knowledge of Slovak traditions and customs",
    "educational.games.geography.title": "Geography Explorer",
    "educational.games.geography.desc": "Learn about Slovak cities, regions, and landmarks",
    "educational.games.history.title": "Historical Timeline",
    "educational.games.history.desc": "Arrange historical Slovak events in chronological order",

    "educational.games.coloring.title": "Slovak Coloring Pages",
    "educational.games.coloring.desc": "Color traditional Slovak patterns and symbols",
    "educational.games.memory.title": "Memory Match",
    "educational.games.memory.desc": "Match pairs of cards with Slovak vocabulary",
    "educational.games.fairytales.title": "Slovak Fairy Tales",
    "educational.games.fairytales.desc": "Interactive stories based on traditional Slovak fairy tales",

    "educational.games.level.beginner": "Beginner",
    "educational.games.level.intermediate": "Intermediate",
    "educational.games.level.advanced": "Advanced",
    "educational.games.level.all": "All Levels",

    "educational.games.help.title": "Help & Resources",
    "educational.games.help.getting.title": "Getting Started",
    "educational.games.help.getting.desc": "Follow these steps to begin your Slovak learning journey:",
    "educational.games.help.getting.step1": "Choose a game that matches your current Slovak language level",
    "educational.games.help.getting.step2": "Click the 'Play Game' button to open the game in a new tab",
    "educational.games.help.getting.step3": "Read the instructions provided on the game page",
    "educational.games.help.getting.step4": "Practice regularly to improve your skills",

    "educational.games.help.difficulty.title": "Difficulty Levels",
    "educational.games.help.difficulty.desc":
      "Our games are categorized by difficulty level to help you find appropriate content:",
    "educational.games.help.difficulty.beginner":
      "For those just starting to learn Slovak with little to no prior knowledge",
    "educational.games.help.difficulty.intermediate":
      "For learners who understand basic Slovak and want to expand their knowledge",
    "educational.games.help.difficulty.advanced":
      "For experienced learners looking to refine their Slovak language skills",

    "educational.games.help.resources.title": "Additional Resources",
    "educational.games.help.resources.desc": "Enhance your learning with these additional Slovak language resources:",

    "educational.games.create.title": "Suggest a Game",
    "educational.games.create.subtitle": "Have an idea for a Slovak educational game? We'd love to hear from you!",
    "educational.games.create.button": "Contact Us",
  },
  sk: {
    // Navigation
    "nav.about": "O nás",
    "nav.events": "Podujatia",
    "nav.membership": "Členstvo",
    "nav.contact": "Kontakt",
    "nav.join": "Pridajte sa",
    "nav.educational.games": "Vzdelávacie Hry",

    // Home page
    "home.hero.title": "Oslavujeme slovenskú kultúru v Manchestri",
    "home.hero.subtitle":
      "Pripojte sa k našej živej komunite a zažite bohaté tradície, srdečnú pohostinnosť a kultúrne dedičstvo Slovenska.",
    "home.hero.join": "Pripojte sa k našej komunite",
    "home.hero.discover": "Objavte podujatia",

    "home.mission.title": "Naše poslanie",
    "home.mission.description":
      "Slovenská komunita v Manchestri sa venuje zachovávaniu a oslavovaniu slovenskej kultúry, poskytovaniu podpory Slovákom žijúcim v Spojenom kráľovstve a budovaniu mostov medzi našou komunitou a širšou oblasťou Manchestru.",
    "home.mission.cultural": "Zachovanie kultúry",
    "home.mission.cultural.desc":
      "Udržiavanie slovenských tradícií prostredníctvom podujatí, workshopov a vzdelávacích programov.",
    "home.mission.community": "Podpora komunity",
    "home.mission.community.desc": "Poskytovanie zdrojov, poradenstva a pocitu spolupatričnosti Slovákom v Manchestri.",
    "home.mission.exchange": "Kultúrna výmena",
    "home.mission.exchange.desc":
      "Zdieľanie slovenskej kultúry so širšou manchesterskou komunitou prostredníctvom verejných podujatí.",

    "home.stats.members": "Aktívnych členov",
    "home.stats.events": "Ročných podujatí",
    "home.stats.years": "Rokov komunity",
    "home.stats.lives": "Ovplyvnených životov",

    "home.events.title": "Nadchádzajúce podujatia",
    "home.events.subtitle":
      "Pripojte sa k nám na týchto vzrušujúcich nadchádzajúcich podujatiach a zažite slovenskú kultúru na vlastnej koži.",
    "home.events.more": "Viac informácií",
    "home.events.all": "Zobraziť všetky podujatia",

    "home.testimonials.title": "Hlasy komunity",
    "home.testimonials.subtitle": "Vypočujte si od našich členov o vplyve, ktorý mala naša komunita na ich životy.",

    "home.involved.title": "Zapojte sa",
    "home.involved.subtitle": "Existuje mnoho spôsobov, ako podporiť naše poslanie a stať sa súčasťou našej komunity.",
    "home.involved.member": "Staňte sa členom",
    "home.involved.member.desc":
      "Pripojte sa k našej komunite a užite si výhody členstva vrátane zliav na podujatia, príležitostí na nadväzovanie kontaktov a ďalšie.",
    "home.involved.volunteer": "Dobrovoľníčte s nami",
    "home.involved.volunteer.desc":
      "Zdieľajte svoje zručnosti a čas, aby ste pomohli organizovať podujatia, vyučovať kurzy alebo podporovať naše administratívne potreby.",
    "home.involved.donate": "Prispejte darom",
    "home.involved.donate.desc":
      "Podporujte naše programy a iniciatívy jednorazovým alebo opakovaným darom, aby sme mohli pokračovať v našej práci.",

    "home.cta.title": "Pripojte sa k našej rastúcej komunite",
    "home.cta.subtitle":
      "Staňte sa členom už dnes a buďte súčasťou našej živej slovenskej komunity v Manchestri. Zažite bohatú kultúru, nájdite si nových priateľov a vytvorte si trvalé spomienky.",
    "home.cta.button": "Staňte sa členom",

    "home.cultural.title": "Slovenské kultúrne dedičstvo",
    "home.cultural.subtitle": "Preskúmajte bohaté tradície a kultúrne prvky, ktoré robia Slovensko jedinečným.",
    "home.cultural.architecture": "Architektúra",
    "home.cultural.costumes": "Ľudové kroje",
    "home.cultural.cuisine": "Kuchyňa",
    "home.cultural.music": "Hudba a tanec",

    // About page
    "about.title": "O nás",
    "about.subtitle":
      "Dozviete sa o našom poslaní, histórii a oddanom tíme za slovenskou komunitou v južnom Manchestri.",
    "about.story.title": "Náš príbeh",
    "about.story.p1":
      "Slovenská komunita v južnom Manchestri bola založená v roku 2010 malou skupinou slovenských imigrantov, ktorí chceli vytvoriť podpornú sieť pre svojich krajanov.",
    "about.story.p2":
      "To, čo začalo ako neformálne stretnutia v obývačkách, sa rozrástlo na živú komunitnú organizáciu s viac ako 200 členmi, pravidelnými podujatiami a vzdelávacími programami.",
    "about.story.p3":
      "Naša charita bola oficiálne zaregistrovaná v roku 2015, čo nám umožnilo rozšíriť naše služby a osloviť viac ľudí, ktorí potrebujú komunitné spojenie.",
    "about.mission.title": "Naše poslanie a hodnoty",
    "about.mission.subtitle": "Riadime sa naším záväzkom k zachovaniu kultúry, podpore komunity a vzdelávaniu.",
    "about.cultural": "Zachovanie kultúry",
    "about.cultural.desc":
      "Sme odhodlaní zachovávať a oslavovať slovenské tradície, jazyk a dedičstvo pre budúce generácie.",
    "about.community": "Podpora komunity",
    "about.community.desc":
      "Poskytujeme podpornú sieť pre Slovákov žijúcich v južnom Manchestri a pomáhame im orientovať sa v živote v Spojenom kráľovstve.",
    "about.education": "Vzdelávanie",
    "about.education.desc":
      "Ponúkame vzdelávacie programy pre deti aj dospelých, aby sa dozvedeli o slovenskej kultúre, histórii a jazyku.",
    "about.team.title": "Náš tím",
    "about.team.subtitle": "Spoznajte oddaných dobrovoľníkov, ktorí robia našu komunitu prosperujúcou.",
    "about.join.title": "Pripojte sa k našej komunite",
    "about.join.subtitle": "Staňte sa členom našej slovenskej komunity a pomôžte nám zachovať naše kultúrne dedičstvo.",
    "about.join.button": "Zaregistrujte sa dnes",

    // Events page
    "events.title": "Podujatia a workshopy",
    "events.subtitle":
      "Pripojte sa k nám na našich nadchádzajúcich kultúrnych podujatiach, workshopoch a komunitných stretnutiach.",
    "events.upcoming.title": "Nadchádzajúce podujatia",
    "events.upcoming.subtitle": "Nenechajte si ujsť naše vzrušujúce podujatia. Označte si svoje kalendáre!",
    "events.easter.title": "Workshop slovenských veľkonočných tradícií",
    "events.easter.desc": "Dozviete sa o tradičných slovenských veľkonočných zvykoch",
    "events.easter.details":
      "Pripojte sa k nám na popoludnie tradičných slovenských veľkonočných zvykov. Dozviete sa o technikách zdobenia vajíčok, tradičných jedlách a kultúrnom význame Veľkej noci na Slovensku.",
    "events.language.title": "Kurz slovenčiny pre začiatočníkov",
    "events.language.desc": "Začnite svoju cestu k učeniu sa slovenčiny",
    "events.language.details":
      "Tento kurz pre začiatočníkov vás zoznámi so základmi slovenského jazyka. Nie sú potrebné žiadne predchádzajúce znalosti. Materiály budú poskytnuté.",
    "events.food.title": "Slovenský festival jedla",
    "events.food.desc": "Ochutnajte chute Slovenska",
    "events.food.details":
      "Zažite bohaté kulinárske tradície Slovenska. Ochutnajte tradičné jedlá, sledujte ukážky varenia a naučte sa recepty, ktoré si môžete vyskúšať doma.",
    "events.film.title": "Slovenský filmový večer",
    "events.film.desc": "Súčasná slovenská kinematografia",
    "events.film.details":
      "Pripojte sa k nám na premietanie ocenených slovenských filmov s anglickými titulkami. Nasleduje diskusia a občerstvenie.",
    "events.dance.title": "Workshop slovenských ľudových tancov",
    "events.dance.desc": "Naučte sa tradičné slovenské tance",
    "events.dance.details":
      "Zažite radosť zo slovenských ľudových tancov. Nie sú potrebné žiadne predchádzajúce tanečné skúsenosti. Odporúča sa pohodlné oblečenie a obuv.",
    "events.festival.title": "Slovenský letný festival",
    "events.festival.desc": "Každoročná oslava slovenskej kultúry",
    "events.festival.details":
      "Naša najväčšia udalosť roka! Pripojte sa k nám na deň hudby, tanca, jedla, remesiel a aktivít pre všetky vekové kategórie. Oslavujte slovenskú kultúru s celou rodinou.",
    "events.host.title": "Chcete usporiadať podujatie?",
    "events.host.subtitle": "Ak máte nápad na slovenské kultúrne podujatie alebo workshop, radi by sme o tom počuli!",
    "events.register": "Registrovať",

    // Membership page
    "membership.title": "Registrácia členstva",
    "membership.subtitle":
      "Pripojte sa k našej slovenskej komunite v južnom Manchestri a pomôžte nám zachovať naše kultúrne dedičstvo.",
    "membership.form.title": "Formulár registrácie členstva",
    "membership.form.desc": "Vyplňte nižšie uvedený formulár a staňte sa členom našej komunity.",
    "membership.personal.title": "Osobné informácie",
    "membership.personal.desc": "Prosím, poskytnite svoje osobné údaje.",
    "membership.first.name": "Krstné meno",
    "membership.last.name": "Priezvisko",
    "membership.email": "Email",
    "membership.phone": "Telefónne číslo",
    "membership.dob": "Dátum narodenia",
    "membership.address.title": "Adresa",
    "membership.address.desc": "Prosím, poskytnite svoju aktuálnu adresu.",
    "membership.address1": "Adresa riadok 1",
    "membership.address2": "Adresa riadok 2 (Voliteľné)",
    "membership.city": "Mesto",
    "membership.postcode": "PSČ",
    "membership.details.title": "Podrobnosti o členstve",
    "membership.details.desc": "Vyberte si typ členstva a preferencie.",
    "membership.type": "Typ členstva",
    "membership.type.individual": "Individuálne (£25/rok)",
    "membership.type.family": "Rodinné (£40/rok)",
    "membership.type.student": "Študentské (£15/rok)",
    "membership.type.senior": "Seniorské (£15/rok)",
    "membership.hear": "Ako ste sa o nás dozvedeli?",
    "membership.hear.friend": "Priateľ alebo rodina",
    "membership.hear.social": "Sociálne médiá",
    "membership.hear.event": "Komunitné podujatie",
    "membership.hear.other": "Iné",
    "membership.interests": "Záujmy (Voliteľné)",
    "membership.interests.placeholder": "Povedzte nám o vašich záujmoch v slovenskej kultúre",
    "membership.social.title": "Sociálne médiá",
    "membership.social.desc": "Prosím, poskytnite svoje profily na sociálnych sieťach (voliteľné).",
    "membership.facebook": "Facebook",
    "membership.instagram": "Instagram",
    "membership.twitter": "Twitter",
    "membership.terms": "Súhlasím s podmienkami používania",
    "membership.newsletter": "Chcel by som dostávať novinky a aktualizácie o podujatiach",
    "membership.volunteer": "Mám záujem o dobrovoľnícke príležitosti",
    "membership.cancel": "Zrušiť",
    "membership.submit": "Odoslať registráciu",

    // Contact page
    "contact.title": "Kontaktujte nás",
    "contact.subtitle": "Spojte sa s naším tímom. Radi by sme od vás počuli!",
    "contact.get.title": "Spojte sa s nami",
    "contact.get.desc":
      "Máte otázky o našej komunite, podujatiach alebo o tom, ako sa zapojiť? Sme tu, aby sme vám pomohli!",
    "contact.address": "Adresa",
    "contact.email": "Email",
    "contact.phone": "Telefón",
    "contact.follow": "Sledujte nás",
    "contact.hours.title": "Otváracie hodiny",
    "contact.hours.weekday": "Pondelok - Piatok",
    "contact.hours.weekday.time": "10:00 - 18:00",
    "contact.hours.saturday": "Sobota",
    "contact.hours.saturday.time": "10:00 - 16:00",
    "contact.hours.sunday": "Nedeľa",
    "contact.hours.sunday.time": "Zatvorené",
    "contact.form.title": "Pošlite nám správu",
    "contact.form.desc": "Vyplňte nižšie uvedený formulár a my sa vám ozveme čo najskôr.",
    "contact.subject": "Predmet",
    "contact.subject.general": "Všeobecná otázka",
    "contact.subject.membership": "Členstvo",
    "contact.subject.events": "Podujatia",
    "contact.subject.volunteer": "Dobrovoľníctvo",
    "contact.subject.donation": "Dary",
    "contact.subject.other": "Iné",
    "contact.message": "Správa",
    "contact.send": "Odoslať správu",
    "contact.visit.title": "Navštívte naše komunitné centrum",
    "contact.visit.desc": "Naše komunitné centrum sa nachádza v srdci južného Manchestru.",

    // Footer
    "footer.about": "O nás",
    "footer.events": "Podujatia",
    "footer.membership": "Členstvo",
    "footer.contact": "Kontakt",
    "footer.support": "Podporte naše poslanie",
    "footer.support.desc": "Pomôžte nám naďalej podporovať slovenskú komunitu prostredníctvom vašich štedrých darov.",
    "footer.donate": "Prispejte teraz",
    "footer.follow": "Sledujte nás",
    "footer.rights": "Všetky práva vyhradené.",

    // Common
    select: "Vybrať",
    "enter.first.name": "Zadajte svoje krstné meno",
    "enter.last.name": "Zadajte svoje priezvisko",
    "enter.email": "Zadajte svoj email",
    "enter.phone": "Zadajte svoje telefónne číslo",
    "enter.street": "Zadajte svoju adresu ulice",
    "enter.apt": "Byt, apartmán, jednotka, atď.",
    "enter.city": "Zadajte svoje mesto",
    "enter.postcode": "Zadajte svoje PSČ",
    "enter.facebook": "Váš Facebook profil",
    "enter.instagram": "Váš Instagram účet",
    "enter.twitter": "Váš Twitter účet",
    "enter.message": "Zadajte svoju správu",
    terms: "podmienky používania",

    // Language selector
    language: "Jazyk",
    "language.english": "Angličtina",
    "language.slovak": "Slovenčina",

    "educational.games.title": "Vzdelávacie Hry",
    "educational.games.subtitle": "Učte sa slovenský jazyk a kultúru prostredníctvom interaktívnych hier a aktivít",
    "educational.games.tab.language": "Jazykové Hry",
    "educational.games.tab.culture": "Kultúrne Hry",
    "educational.games.tab.children": "Detské Hry",
    "educational.games.play": "Hrať Hru",
    "educational.games.interactive": "Interaktívne Učenie",

    "educational.games.vocab.title": "Slovná Zásoba",
    "educational.games.vocab.desc": "Spárujte slovenské slová s ich anglickými prekladmi",
    "educational.games.wordsearch.title": "Hľadanie Slov",
    "educational.games.wordsearch.desc": "Nájdite slovenské slová ukryté v mriežke písmen",
    "educational.games.sentence.title": "Tvorba Viet",
    "educational.games.sentence.desc": "Usporiadajte slová tak, aby tvorili správne slovenské vety",

    "educational.games.traditions.title": "Kvíz o Slovenských Tradíciách",
    "educational.games.traditions.desc": "Otestujte svoje znalosti slovenských tradícií a zvykov",
    "educational.games.geography.title": "Geografický Prieskumník",
    "educational.games.geography.desc": "Spoznajte slovenské mestá, regióny a pamiatky",
    "educational.games.history.title": "Historická Časová Os",
    "educational.games.history.desc": "Usporiadajte historické slovenské udalosti v chronologickom poradí",

    "educational.games.coloring.title": "Slovenské Omaľovánky",
    "educational.games.coloring.desc": "Vyfarbite tradičné slovenské vzory a symboly",
    "educational.games.memory.title": "Pamäťová Hra",
    "educational.games.memory.desc": "Spárujte karty so slovenskou slovnou zásobou",
    "educational.games.fairytales.title": "Slovenské Rozprávky",
    "educational.games.fairytales.desc": "Interaktívne príbehy založené na tradičných slovenských rozprávkach",

    "educational.games.level.beginner": "Začiatočník",
    "educational.games.level.intermediate": "Mierne Pokročilý",
    "educational.games.level.advanced": "Pokročilý",
    "educational.games.level.all": "Všetky Úrovne",

    "educational.games.help.title": "Pomoc a Zdroje",
    "educational.games.help.getting.title": "Začíname",
    "educational.games.help.getting.desc":
      "Postupujte podľa týchto krokov, aby ste začali svoju cestu učenia sa slovenčiny:",
    "educational.games.help.getting.step1": "Vyberte si hru, ktorá zodpovedá vašej aktuálnej úrovni slovenského jazyka",
    "educational.games.help.getting.step2": "Kliknite na tlačidlo 'Hrať Hru' pre otvorenie hry v novej karte",
    "educational.games.help.getting.step3": "Prečítajte si pokyny uvedené na stránke hry",
    "educational.games.help.getting.step4": "Pravidelne cvičte, aby ste zlepšili svoje zručnosti",

    "educational.games.help.difficulty.title": "Úrovne Obtiažnosti",
    "educational.games.help.difficulty.desc":
      "Naše hry sú kategorizované podľa úrovne obtiažnosti, aby vám pomohli nájsť vhodný obsah:",
    "educational.games.help.difficulty.beginner":
      "Pre tých, ktorí sa práve začínajú učiť slovenčinu s malými alebo žiadnymi predchádzajúcimi znalosťami",
    "educational.games.help.difficulty.intermediate":
      "Pre študentov, ktorí rozumejú základnej slovenčine a chcú rozšíriť svoje znalosti",
    "educational.games.help.difficulty.advanced":
      "Pre skúsených študentov, ktorí chcú zdokonaliť svoje znalosti slovenského jazyka",

    "educational.games.help.resources.title": "Ďalšie Zdroje",
    "educational.games.help.resources.desc":
      "Vylepšite svoje učenie pomocou týchto ďalších zdrojov slovenského jazyka:",

    "educational.games.create.title": "Navrhnite Hru",
    "educational.games.create.subtitle": "Máte nápad na slovenskú vzdelávaciu hru? Radi by sme o tom počuli!",
    "educational.games.create.button": "Kontaktujte Nás",
  },
}

/**
 * Create the language context with default undefined value
 * Will be populated by the provider
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * LanguageProvider Component
 *
 * Provides language state and translation functions to the application
 * Handles loading and saving language preferences to localStorage
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the language context
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with English as the default language
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    // Only runs on client-side after component mounts
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sk")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  /**
   * Translation function
   * Returns the translated string for a given key
   * Falls back to the key itself if translation is not found
   *
   * @param {string} key - The translation key to look up
   * @returns {string} - The translated string
   */
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Provide the language context to child components
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

/**
 * Custom hook to use the language context
 * Throws an error if used outside of a LanguageProvider
 *
 * @returns {LanguageContextType} - The language context with current language, setter, and translation function
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

