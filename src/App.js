// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </Router>
  );
};

export default App;


