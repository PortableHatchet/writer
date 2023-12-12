import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import WordProcessor from './WordProcessor';
import Information from './Information';
import Navbar from './Navbar';
import { MinimizedProvider } from './MinimizedContext'; // Adjust the path accordingly

function App() {
  return (
    <Router>
      <MinimizedProvider>
        <div className="app">
          <Navbar />
          <div className={`content`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/WordProcessor" element={<WordProcessor />} />
              <Route path="/Information" element={<Information />} />
            </Routes>
          </div>
        </div>
      </MinimizedProvider>
    </Router>
  );
}

export default App;



