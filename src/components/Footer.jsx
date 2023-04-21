import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer section__padding">
      <div className="footer__container">
        <div className="footer__company">
          <img src={logo} alt="hoobank" className="footer__logo" />
          <p className="footer__idea">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key}>
              <h4 className="footer__heading">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.name} className="footer__link">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__details">
        <p className="footer__copyright">
          Copyright <b>©</b> 2021 HooBank. All Rights Reserved.
        </p>

        <div className="footer__socials">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="footer__social"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
