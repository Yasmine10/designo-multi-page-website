import ImgHeroMobile from "../assets/about/mobile/image-about-hero.jpg";
import ImgHeroTablet from "../assets/about/tablet/image-about-hero.jpg";
import ImgHeroDesktop from "../assets/about/desktop/image-about-hero.jpg";

import Locations from "../components/Locations.jsx";

function About(props) {
    return (
        <main id="main" className="main">
            <section className="about-hero | container--full-mobile bg-primary-400 txt-primary-100">
                <div className="about-hero__img-container">
                    <picture>
                        <source srcSet={ImgHeroDesktop} media="(min-width: 1200px)" />
                        <source srcSet={ImgHeroTablet} media="(min-width: 768px)"/>
                        <img src={ImgHeroMobile} alt=""/>
                    </picture>
                </div>
                <div className="about-hero__content">
                    <h1 className="title | h1">About Us</h1>
                    <p className="text">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations,
                        and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital
                        experiences that connect with our clients’ audiences.</p>
                </div>
            </section>

            <Locations />
        </main>
    );
}

export default About;