import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  nl: {
    // Nav
    nav: {
      cases: "Cases",
      contact: "Contact",
    },
    // Home Hero
    hero: {
      greeting: "Hey, ik ben",
      name: "Sam",
      surname: "de Smit",
      wave: "👋",
      welcome: "Super leuk je digitaal te ontmoeten en welkom op mijn portfoliowebsite",
      intro: "Ik ben een front-end developer met een passie voor het bouwen van visueel aantrekkelijke en functionele websites. Met mijn expertise in HTML, CSS (Sass, Tailwind), JavaScript en React zorg ik voor websites die niet alleen mooi zijn, maar ook optimaal presteren. Ik heb ruime ervaring binnen de e-commercebranche, met name in het werken met Shopify, en denk graag mee met klanten om hun visie te vertalen naar effectieve, gebruiksvriendelijke oplossingen. Samen werken we aan de perfecte online ervaring voor jouw bedrijf.",
      cta: "Vragen?",
    },
    // Skills
    skills: {
      title: "Skills",
    },
    // Language
    language: {
      title: "Talen",
      dutch: "Nederlands",
      english: "Engels",
    },
    // Bio
    bio: {
      title: "Over mij",
      description: "Mijn naam is Sam de Smit, een gepassioneerde developer die houdt van het bouwen van mooie en functionele websites.",
      gender: "Geslacht",
      male: "Man",
      birthdate: "Geboortedatum",
      nationality: "Nationaliteit",
      dutch: "Nederlands",
    },
    // Cases
    cases: {
      title: "Cases",
      subtitle: "Een selectie van Shopify webshops die ik heb gebouwd of aan meegewerkt heb. Van concept tot lancering, met focus op design, performance en conversie.",
      viewProject: "Bekijk project",
      contactMe: "Neem contact op",
      comingSoon: "Binnenkort",
      comingSoonTitle: "Binnenkort",
      comingSoonDesc: "Nieuw project in ontwikkeling. Neem contact op als je wilt weten wat ik voor jouw webshop kan betekenen.",
      ctaTitle: "Klaar voor jouw project?",
      ctaText: "Laten we samen jouw Shopify webshop bouwen.",
      ctaButton: "Neem contact op",
    },
    // Case descriptions
    caseDescriptions: {
      jollein: "Baby- en kinderproducten webshop voor de B2B en B2C markt. Gebruiksvriendelijke navigatie met focus op productontdekking en conversie.",
      eichholtz: "Luxe interieur en meubelen webshop voor de Amerikaanse markt. Elegante productpresentatie met B2B en B2C functionaliteit.",
      chocolatemakers: "Op maat gebouwde webshop met een warm en uitnodigend design. Inclusief productconfigurator voor gepersonaliseerde chocoladepakketten, mix-and-match en meer.",
      idyl: "Volledig op maat gebouwde premium sieraden webshop met strak design en focus op gebruikservaring. Geoptimaliseerd voor conversie met snelle laadtijden en intuïtieve navigatie.",
      ananda: "Op maat gebouwde wellness- en lifestyle webshop met rustgevend design. Geoptimaliseerde checkout-flow en geïntegreerde e-mailmarketing voor klantbehoud.",
      alphamen: "Op maat gebouwde lifestyle- en verzorgingswebshop voor mannen. Strak modern design met focus op productpresentatie en mannelijke doelgroep.",
      spriet: "Moderne Nederlandse webshop met focus op duurzaamheid. Strak design met uitgebreide productfiltering en snelle mobiele ervaring.",
      kassl: "High-end fashion webshop voor een internationaal merk. Minimalistisch design met focus op productpresentatie en naadloze checkout-ervaring.",
      graylabel: "Duurzame kinderkleding webshop met biologische materialen. Strak design met focus op merkidentiteit en gebruiksvriendelijke winkelervaring.",
    },
    // Contact
    contact: {
      title: "Contact",
      text: "Bedankt dat je de tijd hebt genomen om mijn CV te bekijken! Ik zou het tof vinden om eens te praten over wat we voor elkaar kunnen betekenen en hoe mijn ervaring en skills passen bij jullie team. Stuur me gerust een berichtje voor een gesprek of om iets af te spreken. Ik kijk ernaar uit om van je te horen!",
      name: "Naam",
      email: "E-mailadres",
      message: "Je bericht",
      send: "Verstuur bericht",
      success: "Formulier succesvol verzonden!",
      error: "Verzenden mislukt. Probeer het opnieuw.",
    },
  },
  en: {
    // Nav
    nav: {
      cases: "Cases",
      contact: "Contact",
    },
    // Home Hero
    hero: {
      greeting: "Hey, I'm",
      name: "Sam",
      surname: "de Smit",
      wave: "👋",
      welcome: "Great to meet you digitally and welcome to my portfolio website",
      intro: "I'm a front-end developer with a passion for building visually appealing and functional websites. With my expertise in HTML, CSS (Sass, Tailwind), JavaScript and React, I create websites that are not only beautiful but also perform optimally. I have extensive experience in the e-commerce industry, particularly working with Shopify, and I enjoy collaborating with clients to translate their vision into effective, user-friendly solutions. Together we'll create the perfect online experience for your business.",
      cta: "Questions?",
    },
    // Skills
    skills: {
      title: "Skills",
    },
    // Language
    language: {
      title: "Languages",
      dutch: "Dutch",
      english: "English",
    },
    // Bio
    bio: {
      title: "About me",
      description: "My name is Sam de Smit, a passionate developer who loves building beautiful and functional websites.",
      gender: "Gender",
      male: "Male",
      birthdate: "Date of birth",
      nationality: "Nationality",
      dutch: "Dutch",
    },
    // Cases
    cases: {
      title: "Cases",
      subtitle: "A selection of Shopify webshops I've built or contributed to. From concept to launch, with focus on design, performance and conversion.",
      viewProject: "View project",
      contactMe: "Get in touch",
      comingSoon: "Coming Soon",
      comingSoonTitle: "Coming Soon",
      comingSoonDesc: "New project in development. Get in touch if you want to know what I can do for your webshop.",
      ctaTitle: "Ready for your project?",
      ctaText: "Let's build your Shopify webshop together.",
      ctaButton: "Get in touch",
    },
    // Case descriptions
    caseDescriptions: {
      jollein: "Baby and children's products webshop for B2B and B2C. Fully custom build with focus on product discovery and conversion.",
      eichholtz: "Luxury interior and furniture webshop for the Miami market. Elegant product presentation with B2C functionality.",
      chocolatemakers: "Custom built artisan chocolate webshop with a warm and inviting design. Including product configuration for personalized chocolate packages, pick and mix and more.",
      idyl: "Fully custom premium jewelry webshop with sleek design and focus on user experience. Optimized for conversion with fast loading times and intuitive navigation.",
      ananda: "Wellness and lifestyle webshop with calming design. Optimized checkout flow and integrated email marketing for customer retention.",
      alphamen: "Custom built men's lifestyle and grooming webshop. Sleek modern design with focus on product presentation and male target audience.",
      spriet: "Modern Dutch webshop with focus on sustainability. Clean design with extensive product filtering and fast mobile experience.",
      kassl: "High-end fashion webshop for an international brand. Minimalist design with focus on product presentation and seamless checkout experience.",
      graylabel: "Sustainable children's clothing webshop with organic materials. Clean design with focus on brand identity and user-friendly shopping experience.",
    },
    // Contact
    contact: {
      title: "Contact",
      text: "Thank you for taking the time to view my CV! I'd love to chat about what we can do for each other and how my experience and skills fit your team. Feel free to send me a message to schedule a conversation or to arrange something. I look forward to hearing from you!",
      name: "Name",
      email: "Email address",
      message: "Your message",
      send: "Send message",
      success: "Form submitted successfully!",
      error: "Failed to submit. Please try again.",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('nl');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
