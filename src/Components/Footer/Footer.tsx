import logo from "../../assets/svg/logo.svg";
import "./Footer.scss";
import DOCS from "../../utils/DOCS.js";
import MENU from "../../utils/MENU.js";
import fb from "../../assets/svg/facebook.svg";
import insta from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";
import li from "../../assets/svg/linkedin.svg";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__wrapper">
                    <div className="footer__contacts">
                        <img className="footer__logo" src={logo} alt="logo" />
                        <p className="footer__text">
                            Some food has looked so awful that it's looked like something that the dog's brought home.
                        </p>
                        <div className="footer__follow">Follow us</div>
                        <div className="footer__socials">
                            <img src={fb} alt="facebook" />
                            <img src={insta} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={li} alt="linkedin" />
                        </div>
                    </div>
                    <ul className="footer__menu">
                        {MENU.map((el) => (
                            <li key={el.name} className="footer__item">
                                <Link to={el.link}>{el.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="footer__menu">
                        {DOCS.map((el) => (
                            <li key={el.name} className="footer__item">
                                <Link to={el.link}>{el.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="footer__newsletter">
                        <div className="footer__title">Newsletter</div>
                        <form className="footer__form" action="">
                            <input className="footer__input" type="email" placeholder="Your Email" />
                            <Button label="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
