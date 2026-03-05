import LogoSlider from '../../components/LogoSlider/LogoSlider';
import './Contact.scss';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';

function Contact() {
  const { t } = useLanguage();
  const [message, setMessage] = useState("");
  const heroRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    const formElements = formRef.current.querySelectorAll('.input-fields, textarea, button');
    gsap.to(formElements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.4,
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "02967982-1b6a-4f40-94bc-b2a3c0e6ee73");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage(t('contact.success'));
      } else {
        setMessage(t('contact.error'));
      }
    } catch (error) {
      setMessage(t('contact.error'));
    }
  };

  return (
    <div className="contact-page">
      <div className='contact-page__inner'>
        <div ref={heroRef} className='contact-page__hero gsap-hidden'>
          <h1 className='contact-page-title'>
            <span className='contact-page-title__accent'>{t('contact.title')}</span>
          </h1>
          <p className='contact-page-text'>{t('contact.text')}</p>
        </div>
        <form ref={formRef} onSubmit={onSubmit}>
          <div className='input-fields gsap-hidden'>
            <input type="text" name="name" placeholder={t('contact.name')} required />
            <input type="email" name="email" placeholder={t('contact.email')} required />
          </div>
          <textarea className='gsap-hidden' rows="10" cols="50" name="message" placeholder={t('contact.message')} required></textarea>
          <button className='gsap-hidden' type="submit">{t('contact.send')}</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        <LogoSlider />
      </div>
    </div>
  );
}

export default Contact;
