import { useParams } from "react-router-dom";

import servicesData from "../data/services.json";

import Intro from "../components/service/Intro.jsx";
import Project from "../components/service/Project.jsx";
import OtherServices from "../components/service/OtherServices.jsx";

function Service() {

    const params = useParams();

    const data = servicesData.filter(service => service.slug === params.service)[0];
    const otherServicesData = servicesData.filter(service => service.slug !== params.service);

    return (
      <main id="main" className="main">
          <Intro service={data} />

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