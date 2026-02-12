import './Nav.scss';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';

function Nav() {
  const { t } = useLanguage();

  return (
    <div className='outer-container'>
      <header className='navigation'>
        <div className='navigation__left'>
          <ThemeToggle />
          <h3 className='navigation__home-logo'>
            <NavLink to="/">Sams Portfolio</NavLink>
          </h3>
        </div>
        <div className='navigation__right'>
          <ul className='navigation__desktop-menu'>
            <li><NavLink to="/cases">{t('nav.cases')}</NavLink></li>
            <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
          </ul>
          <LanguageSelector />
        </div>
      </header>
    </div>
  );
}

export default Nav;
