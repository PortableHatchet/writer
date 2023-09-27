import './App.css';
import WordProcessor from './WordProcessor';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Information from './Information';
import React, { useState } from "react";



function App() {
  
  
  return (
    <Router>
      <div className="app">
      <Navbar/>
        <div
          className={`content`}
        >
          <Routes>
          <Route path="/" element= {<Dashboard/>} />
          <Route path="/WordProcessor" element={<WordProcessor/>} />
          <Route path="/Information" element={<Information/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



