import { useState } from "react";
import Logo from "../assets/shared/desktop/logo-dark.png";
import { Link } from "react-router-dom";

function Navigation() {

    const [ isToggled, setIsToggled ] = useState(false);

    return(
      <header id="header">
          <nav className="navigation | container">
              <Link to="/" className="navigation__logo-container"><img src={Logo} alt=""/></Link>

              <button
                  type="submit"
                  id="menu-toggle"
                  className="menu-toggle"
                  aria-expanded={isToggled}
                  aria-controls="nav-list"
                  aria-label="toggle menu"
                  onClick={() => setIsToggled((isToggled) => !isToggled)}
              >Menu</button>

              <ul id="nav-list" className={'navigation__nav-list ' + (isToggled ? 'open' : 'closed') + ' txt-secondary-900 txt-upper'}>
                  <li><Link to="/our-company">Our company</Link></li>
                  <li><Link to="/locations">Locations</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
      </header>
    );
}

export default Navigation;