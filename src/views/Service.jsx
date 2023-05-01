import { useParams } from "react-router-dom";

import servicesData from "../data/services.json";

import Project from "../components/service/Project.jsx";
import OtherServices from "../components/service/OtherServices.jsx";

function Service() {

    const params = useParams();

    const data = servicesData.filter(service => service.slug === params.service)[0];
    const otherServicesData = servicesData.filter(service => service.slug !== params.service);

    return (
      <main id="main" className="main">
          <section className={`service-intro ${data.slug} | container--full-mobile`}>
              <h1 className="service-intro__title | h1">{data.name}</h1>
              <p className="service-intro__text">{data.intro_text}</p>
          </section>

          <section className="service-projects | container">
            <ul className="service-projects__list">
              { data.projects.map((project) => (
                <li className="service-projects__item">
                  <Project service={data.slug} project={project} />
                </li>
              ))}
            </ul>
          </section>

          <OtherServices services={otherServicesData} />
      </main>
    );
}

export default Service;