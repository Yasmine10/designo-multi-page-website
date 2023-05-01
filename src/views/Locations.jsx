import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import locationsData from "../data/locations.json";
import { ReactComponent as IconMarker} from "/src/assets/shared/desktop/icon-facebook.svg";

const { VITE_MAPBOX_USERNAME, VITE_MAPBOX_STYLE_ID, VITE_MAPBOX_ACCESS_TOKEN } = import.meta.env;


function Locations(props) {
    const position = [51.505, -0.09];

    const icon = L.divIcon({
        className: 'custom-icon',
        html: '<span class="custom-marker"></span>'
    })

    return (
      <main id="main" className="main">
          <section className="locations | container--full-mobile">
              <ul className="locations__list | spacing-l">
                  { locationsData.map((location, index) => (
                      <li className="locations__item" key={index}>
                          <div className="map-container">
                              <MapContainer
                                  center={[location.lat, location.lng]}
                                  zoom={15}
                                  scrollWheelZoom={true}
                                  style={{ height: "320px", width: "100%" }}
                              >
                                  <TileLayer
                                      attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                                      url={`https://api.mapbox.com/styles/v1/${VITE_MAPBOX_USERNAME}/${VITE_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_MAPBOX_ACCESS_TOKEN}`}
                                  />
                                  <Marker position={[location.lat, location.lng]} icon={icon} />
                              </MapContainer>
                          </div>
                          <div className="content | bg-secondary-200">
                              <h2 className="title | h2 txt-primary-400">{location.country}</h2>
                              <div className="address">
                                  <h3>{location.office_name}</h3>
                                  <p>{location.address.number + ' ' + location.address.street}</p>
                                  <p>{location.address.city + ' ' + location.address.postal}</p>
                              </div>
                              <div className="contact-info">
                                  <h3>Contact</h3>
                                  <p className="phone">P : {location.phone}</p>
                                  <p className="email">M : {location.email}</p>
                              </div>
                          </div>
                      </li>
                  ))}
              </ul>
          </section>
      </main>
    );
}

export default Locations;