import LogoSlider from '../../components/LogoSlider/LogoSlider';
import './Contact.scss';
import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState(""); // State to store success/error message

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
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className='contact-page__inner'>
        <h5 className='contact-page-title'>Contact</h5>
        <p className='contact-page-text'>Bedankt dat je de tijd hebt genomen om mijn CV te bekijken! Ik zou het tof vinden om eens te praten over wat we voor elkaar kunnen betekenen en hoe mijn ervaring en skills passen bij jullie team. Stuur me gerust een berichtje voor een gesprek of om iets af te spreken. Ik kijk ernaar uit om van je te horen!</p>
        <form onSubmit={onSubmit}>
          <div className='input-fields'>
            <input type="text" name="name" placeholder="Naam" required />
            <input type="email" name="email" placeholder="Emailadres" required />
          </div>
          <textarea rows="10" cols="50" name="message" placeholder="Je bericht" required></textarea>
          <button type="submit">Verstuur bericht</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        <LogoSlider />

      </div>
    </div>
  );
}

export default Contact;
