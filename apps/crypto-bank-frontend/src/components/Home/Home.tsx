
import React from "react";
import "./Home.scss";
import landingvideo from "../../assets/FinalLanding1.mp4"
import { Button, Space } from 'antd';

import backimg from '../../assets/images/backimg2.jpg'

const Home = () => {
  const handleLoginClick = () => {
    // Handle login logic
    console.log("Log In clicked");
  };

  const handleSignUpClick = () => {
    // Handle sign up logic
    console.log("Sign Up clicked");
  };

  return (
    <section className="home">
      {/* <video className="home__video" autoPlay loop muted>
        <source src={landingvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img className="home__video" src={backimg} alt="what the fuck bro" />
      <div className="home__overlay" />
      <div className="home__content">
        <h2 className="home__heading">
          <p className="home__heading__welcome">Welcome</p>
          to <strong>PeerLink</strong>
        </h2>
        <div className="home__buttons">
        <button className="home__button home__button--light-blue" onClick={handleLoginClick}>
            Log In
          </button>
          <button className="home__button home__button--dark-blue" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;