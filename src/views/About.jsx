import ImgHeroMobile from "../assets/about/mobile/image-about-hero.jpg";
import ImgHeroTablet from "../assets/about/tablet/image-about-hero.jpg";
import ImgHeroDesktop from "../assets/about/desktop/image-about-hero.jpg";

import ImgContent1Mobile from "../assets/about/mobile/image-world-class-talent.jpg";
import ImgContent1Desktop from "../assets/about/desktop/image-world-class-talent.jpg";

import ImgContent2Mobile from "../assets/about/mobile/image-real-deal.jpg";
import ImgContent2Desktop from "../assets/about/desktop/image-real-deal.jpg";

import Locations from "../components/Locations.jsx";

function About(props) {
    return (
        <main id="main" className="main">
            <section className="about-hero">
                <div className="about-hero__container | container--full-mobile bg-primary-400 txt-primary-100">
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
                </div>
            </section>

            <section className="about-content about-content--left | container--full-mobile spacing-l">
                <div className="about-content__img-container">
                    <picture>
                        <source srcSet={ImgContent1Desktop} media="(min-width: 1200px)" />
                        <img src={ImgContent1Mobile} alt=""/>
                    </picture>
                </div>
                <div className="about-content__content bg-secondary-200">
                    <h2 className="title | h2 txt-primary-400">World-class talent</h2>
                    <div className="text">
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                    </div>
                </div>
            </section>

            <Locations />

            <section className="about-content about-content--right | container--full-mobile spacing-l">
                <div className="about-content__img-container">
                    <picture>
                        <source srcSet={ImgContent2Desktop} media="(min-width: 1200px)" />
                        <img src={ImgContent2Mobile} alt=""/>
                    </picture>
                </div>
                <div className="about-content__content | bg-secondary-200">
                    <h2 className="title | h2 txt-primary-400">The real deal</h2>
                    <div className="text">
                        <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;