import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'


function Navbar() {

  //const [isMinimized, setIsMinimized] = useState(false);

  //const toggleNavbar = () => {
    //setIsMinimized(!isMinimized);

  return (
    <div className={`navbar`}>
      <button>
      </button>
      <ul>
        <li>
          <NavLink to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/WordProcessor">Word Processor</NavLink>
        </li>
        <li>
          <NavLink to="/Information">Information</NavLink>
        </li>
      </ul>
    </div>
  );
}


export default Navbar;