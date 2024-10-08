import './Skills.scss'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const scrollRef = useRef();
  useGSAP(() => {
    const skills = gsap.utils.toArray('.skill__percentage');

    gsap.from(skills,
      {
        duration: 2,
        width: 0,
        ease: 'ease-in',
        opacity: 0,
        // scrollTrigger: {
        //   trigger: skills,
        //   start: 'bottom bottom',
        //   end: 'top 80%',
        //   scrub: true,
        // }
      })

  }, []);

  return (
    <div className='skills-page'>
      <h5 className='skills-page__title'>Mijn stack</h5>
      <ul className='skills-list' ref={scrollRef}>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>HTML</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-html'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>CSS / Sass</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-css'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>Tailwind</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-tailwind'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>React</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-react'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>Javascript</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-js'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>Make.com</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-make'>
            </div>
          </div>
        </li>
        <li className='skill'>
          <span className='skill__line'>-</span>
          <span className='skill__name'>Figma</span>
          <div className='skill__progres_bar'>
            <div className='skill__percentage skill__percentage-figma'>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Skills
