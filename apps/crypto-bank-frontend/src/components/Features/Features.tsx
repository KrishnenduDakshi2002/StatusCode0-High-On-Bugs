// src/components/Features.js
import React from 'react';
import './Features.scss';

import Icon from '../../icons/Icon';

const Features = () => {
  const featuresList = [
    {
      icon: 'path-to-feature-icon-1.png', // Replace with the actual icon path
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more features as needed
  ];

  return (
    <section className="features">
      <h2 className="features__heading">Features</h2>
      <ul className="features__list">
        {featuresList.map((feature, index) => (
          <li key={index} className="features__item">
            <div className="features__icon">
              {/* <img
                src={feature.icon}
                alt={`Feature Icon ${index + 1}`}
                className="features__icon-img"
              /> */}
              <Icon />
            </div>
            <div className="features__details">
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
