import './HomeHero.scss'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import SamProfilePicture from '../../assets/sam_profile_picture.png'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

function HomeHero() {
  const { t } = useLanguage();

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
        <h2 className='hero-text hero-text-name'>{t('hero.greeting')} <span className='home-hero__text-name'>{t('hero.name')}</span> {t('hero.surname')} {t('hero.wave')}</h2>
        <p className='hero-text'>{t('hero.welcome')}</p>
        <p className='hero-text'>{t('hero.intro')}</p>
        <Link className='hero-text' to='/contact'>{t('hero.cta')}</Link>
      </div>
      <img className='home-hero__image' src={SamProfilePicture} alt="" />
    </div>
  )
}

export default HomeHero
