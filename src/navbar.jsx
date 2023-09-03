import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/wordprocessor">WordProcessor</Link>
        </li>
        <li>
          <Link to="/info">Information</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;