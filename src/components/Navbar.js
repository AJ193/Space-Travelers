import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

      <Link className="navbar-brand d-flex" to="/" style={{ fontSize: '2rem' }}>
      <img src={require('../img/logo.png')} alt="logo" height="60px" className="mx-2" />
          Space Travellers&apos; Hub
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Navbar Items */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                Rockets
            </li>
            <li className="nav-item">
                Dragons
            </li>
            <li className="nav-item">
                Missions
            </li> 
            <li className="nav-item">
                Profile
            </li> 
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
