import { Link } from "react-router-dom";

import HeroImg from "../assets/home/desktop/image-hero-phone.png";
import { ReactComponent as IllustrationPassionate} from "../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as IllustrationResourceful} from "../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as IllustrationFriendly} from "../assets/home/desktop/illustration-friendly.svg";

import servicesData from "../data/services.json";

import OtherServices from "../components/OtherServices.jsx";

function Home (props) {
    return (
        <main id="main" className="main">
            <section className="home-hero | spacing-l">
                <div className="home-hero__container | container--full-mobile">
                    <div className="home-hero__content">
                        <h1 className="home-hero__title | h1">Award-winning custom designs and digital branding solutions</h1>
                        <p className="home-hero__text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                        <Link to="/our-company" className="home-hero__btn | btn btn--primary">Learn more</Link>
                    </div>
                    <div className="home-hero__img-container">
                        <img src={HeroImg} alt=""/>
                    </div>
                </div>
            </section>

            <OtherServices services={servicesData} />

            <section className="home-sell-points | spacing-l">
               <div className="home-sell-points__container | container">
                   <ul className="home-sell-points__list">
                       <li className="home-sell-points__item">
                           <div className="img-container">
                               <IllustrationPassionate className="illustration" />
                           </div>
                           <div className="content">
                               <h2 className="title | h3">Passionate</h2>
                               <p className="text">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                                   art, design, and technology into exciting new solutions.</p>
                           </div>
                       </li>
                       <li className="home-sell-points__item">
                           <div className="img-container">
                               <IllustrationResourceful className="illustration" />
                           </div>
                           <div className="content">
                               <h2 className="title | h3">Resourceful</h2>
                               <p className="text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
                                   collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                           </div>
                       </li>
                       <li className="home-sell-points__item">
                           <div className="img-container">
                               <IllustrationFriendly className="illustration" />
                           </div>
                           <div className="content">
                               <h2 className="title | h3">Friendly</h2>
                               <p className="text">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
                                   strive to give them the best experience a company can provide.</p>
                           </div>
                       </li>
                   </ul>
               </div>
            </section>
        </main>
    );
}

export default Home;