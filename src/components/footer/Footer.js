import React from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineTwitter,
} from "react-icons/ai";
import './Footer.scss'
import creditCardImg from '../../assets/creditcardicons.png'

function Footer() {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="content">
                    <div className="footer-left">
                        <h3 className="title">Follow us</h3>
                        <ul className="follow">
                            <li className="hover-link center">
                                <AiOutlineInstagram />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineFacebook />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineTwitter />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineMail />
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <h3 className="title">Company</h3>
                        <ul className="company">
                            <li className="hover-link">Contact Us</li>
                            <li className="hover-link">Privacy Policy</li>
                            <li className="hover-link">
                                Returns And Exchange Policy
                            </li>
                            <li className="hover-link">Shipping Policy</li>
                            <li className="hover-link">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="subfooter center">
                    <div className="credit-card-img">
                        <img src={creditCardImg} alt="credit card img" />
                    </div>
                    <p>Copyright {new Date().getFullYear()} © <strong>Posterz.</strong></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
