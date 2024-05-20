import React from 'react';
import './Banner.css'; // Import the CSS file for styles
import bannerImage from '../../assets/banner.png';


const Banner = ({ text }) => {
  return (
    <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <h1>Ocean-based Chemicals for <br />  Personal and Home Care</h1>
        <h2>Kind to the skin, and the planet</h2>
        <a href="https://www.linkedin.com/company/bravelycultured" className="linkedin-button">Find us on LinkedIn</a>
    </div>
  );
};

export default Banner;


