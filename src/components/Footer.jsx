import { Link } from "react-router-dom";

import Logo from "../assets/shared/desktop/logo-light.png";
import { ReactComponent as IconFacebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as IconYoutube } from "../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as IconTwitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../assets/shared/desktop/icon-instagram.svg";

function Footer() {
    return (
      <footer className="footer | bg-secondary-900 txt-primary-100">
        <div className="container">
            <section className="footer__navigation">
                <nav aria-label="Main">
                    <div className="logo-container">
                        <img src={Logo} alt="Designo"/>
                    </div>

                    <ul className="footer-nav-list | txt-upper">
                        <li><Link to="/our-company">Our company</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </section>
            <section className="footer__contact-info">
                <div className="address">
                    <p className="fw-bold">Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>

                <div className="contact">
                    <p className="fw-bold">Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>

                <ul className="social-links">
                    <li>
                        <a href="#">
                            <span className="sr-only">Facebook</span>
                            <IconFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sr-only">Youtube</span>
                            <IconYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sr-only">Twitter</span>
                            <IconTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sr-only">Pinterest</span>
                            <IconPinterest />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sr-only">Instagram</span>
                            <IconInstagram />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
      </footer>
    );
}

export default Footer;