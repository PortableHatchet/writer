import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file for styling
import WordProcessor from './wordProcessor';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'minimized'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? 'Minimize' : 'Expand'}
      </button>
      <ul className="nav-menu">
        <li><WordProcessor /></li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
