import './Nav.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';

function Nav() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className='outer-container'>
      <header className='navigation'>
        <div className='navigation__left'>
          <div className='navigation__desktop-controls'>
            <ThemeToggle />
          </div>
          <h3 className='navigation__home-logo'>
            <NavLink to="/">Sams Portfolio</NavLink>
          </h3>
        </div>
        <div className='navigation__right'>
          <ul className='navigation__desktop-menu'>
            <li><NavLink to="/cases">{t('nav.cases')}</NavLink></li>
            <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
          </ul>
          <div className='navigation__desktop-controls'>
            <LanguageSelector />
          </div>
          <button
            className={`navigation__hamburger ${menuOpen ? 'navigation__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navigation__mobile-menu ${menuOpen ? 'navigation__mobile-menu--open' : ''}`}>
          <ul>
            <li><NavLink to="/cases" onClick={() => setMenuOpen(false)}>{t('nav.cases')}</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</NavLink></li>
          </ul>
          <div className='navigation__mobile-controls'>
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
