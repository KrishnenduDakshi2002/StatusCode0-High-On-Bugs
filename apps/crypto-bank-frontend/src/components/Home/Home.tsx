import { React, useEffect } from 'react';
import './Home.scss';

import backimg from '../../assets/images/backimg2.jpg';

import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLoginClick = () => {
    // Handle login logic
    console.log('Log In clicked');
    loginWithRedirect();
  };

  const handleSignUpClick = () => {
    // Handle sign up logic
    console.log('Sign Up clicked');
    loginWithRedirect();
  };

  return (
    <section id="HOME" className="home">
      <img className="home__video bg-main-bg" alt="what the fuck bro" />
      <div className="home__overlay" />
      <div className="home__content">
        <h2 className="home__heading">
          <p className="home__heading__welcome">Welcome</p>
          to{' '}
          <strong>
            <span className="font-poppins text-text1">Peer</span>
            <span className="font-poppins text-white">Link</span>
          </strong>
        </h2>
        <div className="home__buttons">
          <button
            className="home__button home__button--light-blue"
            onClick={handleLoginClick}
          >
            Log In
          </button>
          <button
            className="home__button home__button--dark-blue"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
