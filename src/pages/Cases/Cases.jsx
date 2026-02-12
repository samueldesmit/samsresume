import './Cases.scss'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CaseCard from '../../components/CaseCard/CaseCard';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Import case images
import idylImg from '../../assets/idyl.jpg';
import chocolatemakersImg from '../../assets/chocolatemakers.webp';
import anandaImg from '../../assets/ananda.jpg';
import sprietImg from '../../assets/spriet.jpg';
import kasslImg from '../../assets/kassl.webp';
import eichholtzImg from '../../assets/eichholtz.jpg';
import jolleinImg from '../../assets/jollein.webp';
import grayLabelImg from '../../assets/gray label.webp';
import alphaMenuImg from '../../assets/the alpha men.jpg';

const getCasesData = (t) => [
  {
    id: 1,
    title: t('cases.comingSoonTitle'),
    description: t('cases.comingSoonDesc'),
    technologies: [],
    image: null,
    url: null,
    year: "2026",
    comingSoon: true
  },
  {
    id: 2,
    title: "Chocolatemakers",
    description: t('caseDescriptions.chocolatemakers'),
    technologies: ["Shopify Plus", "B2B", "B2C", "Liquid", "Typescript", "Tailwind", "Gorgias", "Klaviyo", "N8N", "Shopify Flow"],
    image: chocolatemakersImg,
    url: "https://chocolatemakers.com",
    year: "2025"
  },
  {
    id: 3,
    title: "Jollein",
    description: t('caseDescriptions.jollein'),
    technologies: ["Shopify Plus", "B2C", "Liquid", "JavaScript", "CSS", "Klaviyo", "Shopify Flow"],
    image: jolleinImg,
    url: "https://jollein.be",
    year: "2025"
  },
  {
    id: 4,
    title: "Eichholtz Miami",
    description: t('caseDescriptions.eichholtz'),
    technologies: ["Shopify", "B2C", "Liquid", "JavaScript", "CSS", "Gogias", "Shopify Flow"],
    image: eichholtzImg,
    url: "https://eichholtzmiami.com",
    year: "2025"
  },
  {
    id: 5,
    title: "IDYL",
    description: t('caseDescriptions.idyl'),
    technologies: ["Shopify Plus", "B2C", "Liquid", "JavaScript", "CSS", "Intercom", "Klaviyo", "make.com", "Shopify Flow"],
    image: idylImg,
    url: "https://idyl.com",
    year: "2024"
  },
  {
    id: 6,
    title: "Ananda",
    description: t('caseDescriptions.ananda'),
    technologies: ["Shopify Plus", "B2C", "Liquid", "Klaviyo", "Tailwind", "Shopify Flow"],
    image: anandaImg,
    url: "https://ananda.nl",
    year: "2024"
  },
  {
    id: 7,
    title: "The Alpha Men",
    description: t('caseDescriptions.alphamen'),
    technologies: ["Shopify", "B2C", "Liquid", "JavaScript", "CSS"],
    image: alphaMenuImg,
    url: "https://thealphamen.nl",
    year: "2024"
  },
  {
    id: 8,
    title: "Spriet",
    description: t('caseDescriptions.spriet'),
    technologies: ["Thema", "B2C", "Liquid", "JavaScript", "CSS"],
    image: sprietImg,
    url: "https://hispriet.com",
    year: "2023"
  },
  {
    id: 9,
    title: "Kassl Editions",
    description: t('caseDescriptions.kassl'),
    technologies: ["Thema", "B2C", "Liquid", "JavaScript", "SASS"],
    image: kasslImg,
    url: "https://kassleditions.com",
    year: "2023"
  },
  {
    id: 10,
    title: "Gray Label",
    description: t('caseDescriptions.graylabel'),
    technologies: ["Shopify", "B2C", "Liquid", "JavaScript", "CSS"],
    image: grayLabelImg,
    url: "https://gray-label.com",
    year: "2023"
  }
];

function Cases() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const casesData = getCasesData(t);

  useEffect(() => {
    // Animate hero immediately
    gsap.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Animate each card when it enters viewport
    cardsRef.current.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 55%',
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='cases-container'>
      <div className='cases-container__inner'>
        {/* Hero Section */}
        <section className='cases-hero'>
          <div ref={heroRef} className='cases-hero__content gsap-hidden'>
            <h1 className='cases-hero__title'>
              <span className='cases-hero__title-accent'>{t('cases.title')}</span>
            </h1>
            <p className='cases-hero__subtitle'>
              {t('cases.subtitle')}
            </p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className='cases-grid'>
          {casesData.map((caseItem, index) => (
            <div
              key={caseItem.id}
              ref={el => cardsRef.current[index] = el}
              className='gsap-hidden'
            >
              <CaseCard caseData={caseItem} />
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className='cases-cta'>
          <h2>{t('cases.ctaTitle')}</h2>
          <p>{t('cases.ctaText')}</p>
          <a href='/contact' className='cases-cta__button'>{t('cases.ctaButton')}</a>
        </section>
      </div>
    </div>
  )
}

export default Cases
