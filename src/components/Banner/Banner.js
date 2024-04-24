import React from 'react';
import './Banner.css'; // Import the CSS file for styles
import bannerImage from '../../assets/banner_splashes.png';


const Banner = ({ text }) => {
  return (
    <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <h1>Marine microbes + Industrial Waste = Green chemicals</h1>
        <h2>On a mission to make biotech commodities replacing petroleum-derived products</h2>
        <a href="https://www.linkedin.com/company/bravelycultured" className="linkedin-button">Find us on LinkedIn</a>
    </div>
  );
};

export default Banner;


