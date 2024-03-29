import { useParams } from "react-router-dom";

import services from "../data/services.json";
import projects from "../data/projects.json";

import Project from "../components/service/Project.jsx";
import OtherServices from "../components/OtherServices.jsx";

function Service() {

    const params = useParams();

    const serviceData = services.filter(service => service.slug === params.service)[0];
    const projectsData = projects.filter(project => project.service_id === serviceData.id);
    const otherServicesData = services.filter(service => service.slug !== params.service);

    return (
      <main id="main" className="main">
          <section className="service-intro | spacing-l">
              <div className={`service-intro__container ${serviceData.slug} | container--full-mobile`}>
                  <h1 className="service-intro__title | h1">{serviceData.name}</h1>
                  <p className="service-intro__text">{serviceData.intro_text}</p>
              </div>
          </section>

          <section className="service-projects | container spacing-l">
            <ul className="service-projects__list">
              { projectsData.map((project, index) => (
                <li className="service-projects__item" key={index}>
                  <Project service={serviceData.slug} project={project} />
                </li>
              ))}
            </ul>
          </section>

          <OtherServices services={otherServicesData} />
      </main>
    );
}

export default Service;