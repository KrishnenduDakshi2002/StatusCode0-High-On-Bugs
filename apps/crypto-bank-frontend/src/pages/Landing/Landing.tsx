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
    <>
      <Navbar loggedIn={false} />
      <Home />
      <Features />
      <OurVision />
      <Team />
      <Footer />
    </>
  );
};

export default Landing;
