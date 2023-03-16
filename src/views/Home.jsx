import { Link } from "react-router-dom";

import HeroImg from "../assets/home/desktop/image-hero-phone.png";

function Home (props) {
    return (
        <main id="main" className="main">
            <section className="home-hero">
                <div className="home-hero__content">
                    <h1 className="h1">Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <Link to="/our-company" className="btn btn--primary">Learn more</Link>
                </div>
                <div className="home-hero__img-container">
                    <img src={HeroImg} alt=""/>
                </div>
            </section>
        </main>
    );
}

export default Home;