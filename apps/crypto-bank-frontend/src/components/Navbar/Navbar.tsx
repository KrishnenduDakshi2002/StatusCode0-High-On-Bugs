import React from 'react';
import './Navbar.scss';

const Navbar = ({ loggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">Peer Link</div>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">Our Vision</li>
          <li className="navbar__item">Features</li>
          <li className="navbar__item">Team</li>
        </ul>
      </div>
      <div className="navbar__right">
        {loggedIn ? (
          <div className="navbar__profile">Profile Icon</div>
        ) : (
          <div className="navbar__login">Login</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
