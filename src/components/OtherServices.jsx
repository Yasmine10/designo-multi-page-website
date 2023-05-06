import {Link, useLocation} from "react-router-dom";

function OtherServices(props) {

    const location = useLocation();

    return (
        <section className={`other-services ${location.pathname === '/' ? "home" : "service"} | container spacing-l`}>
            { props.services.map((service, index) => (
                <Link to={`/services/${service.slug}`} className="other-services__service-link" key={index}>
                    <div className="bg">
                        <picture>
                            { service.slug === 'web-design' ?
                                <source srcSet={'/assets/home/desktop/' + (location.pathname === "/" ? service.images.large : service.images.small)} media="(min-width: 1200px)" />
                                :
                                <source srcSet={`/assets/home/desktop/${service.image}`} media="(min-width: 1200px)" />
                            }
                            <source srcSet={`/assets/home/tablet/${service.image}`} media="(min-width: 768px)" />
                            <img src={`/assets/home/mobile/${service.image}`} alt="" />
                        </picture>
                    </div>
                    <div className="content">
                        <h2 className="service-name | h2">{service.name}</h2>
                        <p className="service-btn">View projects</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}

export default OtherServices;