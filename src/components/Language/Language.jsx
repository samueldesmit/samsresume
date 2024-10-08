import './Language.scss'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Language() {
  const scrollRef = useRef();

  useGSAP(() => {
    const languages = gsap.utils.toArray('.language__percentage');

    gsap.from(languages,
      {
        duration: 1,
        width: 0,
        ease: 'ease-in',
        opacity: 0,
        // scrollTrigger: {
        //   trigger: languages,
        //   start: 'bottom bottom',
        //   end: 'top 80%',
        //   scrub: true,
        // }
      })

  }, []);

  return (
    <div className='language-page'>
      <h5 className='language-page__title'>Taal</h5>
      <ul className='languages-list' ref={scrollRef}>
        <li className='language'>
          <span className='language__line'>-</span>
          <span className='language__name'>Nederlands</span>
          <div className='language__progres_bar'>
            <div className='language__percentage language__percentage-nl'>
            </div>
          </div>
        </li>
        <li className='language'>
          <span className='language__line'>-</span>
          <span className='language__name'>Engels</span>
          <div className='language__progres_bar'>
            <div className='language__percentage language__percentage-en'>
            </div>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Language
