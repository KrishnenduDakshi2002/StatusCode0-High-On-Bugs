import React from 'react';
import './OurVision.scss';
import vision1 from '../../assets/images/vision1.jpg';
import vision2 from '../../assets/images/vision2.jpg';

const OurVision = () => {
  return (
    <section className="our-vision">
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
              We strive to provide innovative solutions for our customers by
              delivering high-quality products and excellent service.
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
            Our vision is to create a positive impact on the community and lead
            the industry with sustainable and forward-thinking solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
