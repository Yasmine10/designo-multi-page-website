import { Link } from "react-router-dom";

import locationsData from "../data/locations.json";

function Locations() {
	return (
		<section className="locations-component | container spacing-l">
			<ul className="locations-component__list">
				{ locationsData.map((location, index) => (
					<li className="locations-component__item" key={index}>
						<div className="img-container">
							<img src={`../assets/shared/desktop/illustration-${location.slug}.svg`} alt=""/>
						</div>
						<div className="content">
							<h2 className="title | h3">{location.country}</h2>
							<Link to="/locations" className="btn btn--secondary">See {location.country}</Link>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Locations;