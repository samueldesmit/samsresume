import LogoSlider from '../../components/LogoSlider/LogoSlider';
import './Contact.scss';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  const [message, setMessage] = useState("");

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
        <h5 className='contact-page-title'>{t('contact.title')}</h5>
        <p className='contact-page-text'>{t('contact.text')}</p>
        <form onSubmit={onSubmit}>
          <div className='input-fields'>
            <input type="text" name="name" placeholder={t('contact.name')} required />
            <input type="email" name="email" placeholder={t('contact.email')} required />
          </div>
          <textarea rows="10" cols="50" name="message" placeholder={t('contact.message')} required></textarea>
          <button type="submit">{t('contact.send')}</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        <LogoSlider />

      </div>
    </div>
  );
}

export default Contact;
