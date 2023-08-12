import React from 'react';

import {
  Footer,
  Navbar,
  Features,
  Home,
  OurVision,
  Team,
} from '../../components';

const Landing = () => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Navbar />
      <Home />
      <Features />
      <OurVision />
      <Team />
      <Footer />
    </div>
  );
};

export default Landing;
