import './HomeHero.scss'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import SamProfilePicture from '../../assets/sam_profile_picture.png'
import { Link } from 'react-router-dom';

function HomeHero() {
  useGSAP(() => {
    gsap.from('.hero-text',
      {
        duration: 1,
        x: -40,
        ease: 'ease-in',
        stagger: 0.2,
        opacity: 0,
      })
  }, []);

  return (
    <div className='home-hero'>
      <div className='home-hero__text'>
        <h2 className='hero-text hero-text-name'>Hej, Ik ben <span className='home-hero__text-name'>Sam</span> de Smit 👋</h2>
        <p className='hero-text'>Super leuk je digitaal te ontmoeten en welkom op mijn portfolio website</p>
        <p className='hero-text'>Ik ben een front-end developer met een passie voor het bouwen van visueel aantrekkelijke en functionele websites. Met mijn expertise in HTML, CSS (Sass, Tailwind), JavaScript en React zorg ik voor websites die niet alleen mooi zijn, maar ook optimaal presteren. Ik heb ruime ervaring binnen de e-commerce branche, met name in het werken met Shopify, en denk graag mee met klanten om hun visie te vertalen naar effectieve, gebruiksvriendelijke oplossingen. Samen werken we aan de perfecte online ervaring voor jouw bedrijf.</p>
        <Link className='hero-text' to='/contact'>Vragen?</Link>
      </div>
      <img className='home-hero__image' src={SamProfilePicture} alt="" />
    </div>
  )
}

export default HomeHero
