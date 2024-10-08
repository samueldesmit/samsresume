import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='outer-container'>
      <header className='navigation'>
        <h3 className='navigation__home-logo'>
          <NavLink to="/">Sams Portfolio</NavLink>
        </h3>
        <ul className='navigation__desktop-menu'>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
