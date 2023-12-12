import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleNavbar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`navbar ${isMinimized ? 'minimized' : ''}`}>
      <button onClick={toggleNavbar}>
        <img src="/keyboard.png" alt="Logo" />
      </button>
      <ul>
        <li>
          <NavLink to="/" title="   Dashboard">
            <img
              src="/histogram.png"
              alt="Dashboard Icon"
              className={isMinimized ? 'icon-minimized' : ''}
            />
            {!isMinimized && 'Dashboard'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/WordProcessor" title="Word Processor">
            <img
              src="/bookshelf.png"
              alt="Word Processor Icon"
              className={isMinimized ? 'icon-minimized' : ''}
            />
            {!isMinimized && 'Word Processor'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Information" title="Information">
            <img
              src="/info.png"
              alt="Information Icon"
              className={isMinimized ? 'icon-minimized' : ''}
            />
            {!isMinimized && 'Information'}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
