import logo from './logo.svg';
import './App.css';
import WordProcessor from './wordProcessor';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Information from './Information';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wordprocessor" element={<WordProcessor />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default App;



