import React from 'react';
import './OurVision.scss';
import vision1 from '../../assets/images/vision1.jpg';
import vision2 from '../../assets/images/vision2.jpg';

const OurVision = () => {
  return (
    <section id="OURVISION" className="our-vision">
      <div className="our-vision__item1">
        <div className="our-vision__icon">
          <img
            src={vision1}
            alt="Mission Icon"
            className="our-vision__icon-img"
          />
        </div>
        <div className="text_box">
          <div className="h3-box">
            <h3 className="our-vision__title1">Our</h3>
            <h3 className="our-vision__title2">Mission</h3>
          </div>
          <div className="p-box">
            <p className="our-vision__text">
              {/* We strive to provide innovative solutions for our customers by
              delivering high-quality products and excellent service. */}
              Introducing a secure solution bridging the $9.63 billion crypto
              lending and $34.45 billion NFT industries. Our platform ensures
              minimal risk by adhering to authentication and regulatory
              standards, creating a confident space for global crypto
              enthusiasts. Join us in shaping a secure and empowering financial
              future.
            </p>
          </div>
        </div>
      </div>
      <div className="our-vision__item2">
        <div className="our-vision__icon">
          <img
            src={vision2} // Placeholder image for vision icon (300x300)
            alt="Vision Icon"
            className="our-vision__icon-img"
          />
        </div>
        <div className="text_box">
          <div className="h3-box">
            <h3 className="our-vision__title1">Our</h3>
            <h3 className="our-vision__title3">Vision</h3>
          </div>
          <p className="our-vision__text">
            We aspire to diminish crypto lending risks by linking Aadhar with
            wallets, ensuring singular accounts. Through meticulous risk
            assessment, a crypto score system identifies high-risk lenders. Our
            robust loan pool curtails losses, and we maintain professionalism by
            blacklisting non-performing assets, redefining safety in crypto
            lending.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
