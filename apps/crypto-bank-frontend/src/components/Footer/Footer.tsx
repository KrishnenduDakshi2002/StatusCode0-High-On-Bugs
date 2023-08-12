// src/components/Footer.js
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="ABOUT" className="footer">
      <div className="footer__content">
        <ul className="footer__links">
          <li className="footer__link-item">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="footer__link-item">
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li className="footer__link-item">
            <a href="https://youtube.com">YouTube</a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
