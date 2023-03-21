import { useParams } from "react-router-dom";

import servicesData from "../data/services.json";

import Intro from "../components/service/Intro.jsx";

function Service(props) {

    const params = useParams();

    const data = servicesData.filter(service => service.slug === params.service)[0];

    return (
      <main id="main" className="main">
          <Intro service={data} />
      </main>
    );
}

export default Service;