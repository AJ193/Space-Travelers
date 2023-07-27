import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/planet.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

      <NavLink className="navbar-brand d-flex" to="/" style={{ fontSize: '2rem' }}>
        <img src={logo} alt="logo" height="60px" className="mx-2" />
        Space Travellers&apos; Hub
      </NavLink>

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
            <NavLink className="nav-link text-primary" activeclassname="active" to="/">
              Rockets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary" activeclassname="active" to="/Dragons">
              Dragons
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  text-primary border-right" activeclassname="active" to="/Missions">
              Missions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  text-primary" activeclassname="active" to="/Profile">
              Profile
            </NavLink>

          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
