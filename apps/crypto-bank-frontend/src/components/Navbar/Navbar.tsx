import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar backdrop-blur-sm">
      <div className="navbar__left">
        <div className="navbar__logo">Peer Link</div>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#HOME">Home</a>
          </li>
          <li className="navbar__item">
            <a href="#OURVISION">Our Vision</a>
          </li>
          <li className="navbar__item">
            <a href="#FEATURES">Features</a>
          </li>
          <li className="navbar__item">
            <a href="#TEAM">Team</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar__right">
        {loggedIn ? (
          <div className="navbar__profile">Profile Icon</div>
        ) : (
          <div className="navbar__login">Login</div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
