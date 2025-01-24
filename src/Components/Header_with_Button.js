import React from 'react';
import './Header_with_Button.css';
import logo from './Images/Altria-logo.png';
 
const HeaderWithButton = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <img
          src={logo}
          alt="Altria Logo"
          className="landing-logo"
        />
        <div className="divider"></div>
        <span className="text">SNOW BRIDGE</span>
      </div>
      <div className="button-section">
        <button className="header-button logout-button">LOGOUT</button>
        <button className="header-button user-button">USER</button>
      </div>
    </div>
  );
};
 
export default HeaderWithButton;