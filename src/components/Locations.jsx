import {Link, useLocation} from "react-router-dom";

import locationsData from "../data/locations.json";

function Locations() {

	const location = useLocation();

	return (
		<section className={`locations-component ${location.pathname === '/contact' ? 'contact' : 'about'} | spacing-l`}>
			<div className="locations-component__container | container">
				<ul className="locations-component__list">
					{ locationsData.map((location, index) => (
						<li className="locations-component__item" key={index}>
							<div className="img-container">
								<img src={`assets/shared/desktop/${location.image}`} alt=""/>
							</div>
							<div className="content">
								<h2 className="title | h3">{location.country}</h2>
								<Link to="/locations" className="btn btn--secondary">See {location.country}</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Locations;