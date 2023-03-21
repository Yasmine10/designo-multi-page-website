import { Link } from "react-router-dom";

function OtherServices(props) {
    return (
        <section className="service-other-services service | container">
            { props.services.map((service) => (
                <Link to={`/services/${service.slug}`} className="service-other-services__service-link">
                        <div className="bg">
                            <picture>
                                { service.slug === 'web-design' ?
                                    <>
                                        <source srcSet={`/src/assets/home/desktop/image-${service.slug}-large.jpg`} media="(min-width: 1440px)" />
                                        <source srcSet={`/src/assets/home/desktop/image-${service.slug}-small.jpg`} media="(min-width: 1200px)" />
                                    </>
                                    :
                                    <source srcSet={`/src/assets/home/desktop/image-${service.slug}.jpg`} media="(min-width: 1200px)" />
                                }
                                <source srcSet={`/src/assets/home/desktop/image-${service.slug}.jpg`} media="(min-width: 1200px)" />
                                <source srcSet={`/src/assets/home/tablet/image-${service.slug}.jpg`} media="(min-width: 768px)" />
                                <img src={`/src/assets/home/mobile/image-${service.slug}.jpg`} alt="" />
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