import {useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/shared/desktop/logo-dark.png";
import { ReactComponent as IconHamburger } from "../assets/shared/mobile/icon-hamburger.svg"
import { ReactComponent as IconClose } from "../assets/shared/mobile/icon-close.svg";

function Navigation(props) {

	const [ isToggled, setIsToggled ] = useState(false);
	const toggle = () => setIsToggled(!isToggled);

	const refMobileMenu = useRef(null);

	const navlinks = [
		{ link: "/our-company", text: "Our company" },
		{ link: "/locations", text: "Locations" },
		{ link: "/contact", text: "Contact" }
	];

	const closeMenu = (e) => {
		if (refMobileMenu.current && isToggled && !refMobileMenu.current.contains(e.target)) {
			setIsToggled(false);
		}
	}

	document.addEventListener('mousedown', closeMenu);

	useEffect(() => {
		if (isToggled) {
			document.getElementById("root").classList.add('scrolled');
			document.body.classList.add('scrolled');
		} else {
			document.getElementById("root").classList.remove('scrolled');
			document.body.classList.remove('scrolled');
		}
	}, [isToggled]);

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
					onClick={toggle}
				>{isToggled ? <IconClose /> : <IconHamburger />}</button>

				<ul id="nav-list" className={'navigation__nav-list ' + (isToggled ? 'open' : 'closed') + ' txt-secondary-900 txt-upper'} ref={refMobileMenu}>
					{ navlinks.map(({link, text}, index) => (
						<li key={index}><NavLink to={link} onClick={window.matchMedia('(max-width: 767px)').matches ? toggle : false}>{text}</NavLink></li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;