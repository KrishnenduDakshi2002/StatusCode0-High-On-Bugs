// src/components/Features.js
import React from 'react';
import './Features.scss';

import Icon from '../../icons/Icon';

const Features = () => {
  const featuresList = [
    {
      icon: 'path-to-feature-icon-1.png', // Replace with the actual icon path
      title: 'One Person One Account',
      description: 'We are linking the wallet with Aadhar Card ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'The Crypto Score',
      description: 'A civil score system but for crypto space',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Risk Assessment',
      description: 'Know about the risk factors of the potential lenders ',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'NFT Colaterals',
      description: 'Take crypto loan with NFT assets',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Loan Pool',
      description: 'Safeguard your crypto and reduce your losses by participating in loan pool',
    },
    {
      icon: 'path-to-feature-icon-2.png', // Replace with the actual icon path
      title: 'Loan from your connections',
      description: 'You can connect to facebook and get loan from your friends',
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
