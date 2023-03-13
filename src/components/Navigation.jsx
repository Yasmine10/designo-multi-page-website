import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/shared/desktop/logo-dark.png";
import { ReactComponent as IconHamburger } from "../assets/shared/mobile/icon-hamburger.svg"
import { ReactComponent as IconClose } from "../assets/shared/mobile/icon-close.svg";


function Navigation(props) {

    const [ isToggled, setIsToggled ] = useState(false);

    if (isToggled) {
        document.getElementById("root").classList.add('scrolled');
    } else {
        document.getElementById("root").classList.remove('scrolled');
    }

    return(
      <header id="header" className="header">
          <nav className="navigation | container" aria-label="Main">
              <NavLink to="/" className="navigation__logo-container"><img src={Logo} alt=""/></NavLink>

              <button
                  type="submit"
                  id="menu-toggle"
                  className="menu-toggle"
                  aria-expanded={isToggled}
                  aria-controls="nav-list"
                  aria-label="toggle menu"
                  onClick={() => setIsToggled((isToggled) => !isToggled)}
              >{isToggled ? <IconClose /> : <IconHamburger />}</button>

              <ul id="nav-list" className={'navigation__nav-list ' + (isToggled ? 'open' : 'closed') + ' txt-secondary-900 txt-upper'}>
                  <li><NavLink to="/our-company">Our company</NavLink></li>
                  <li><NavLink to="/locations">Locations</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
          </nav>
      </header>
    );
}

export default Navigation;