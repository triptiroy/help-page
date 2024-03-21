import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Import CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page-container">
    <div className="main-page-heading">


      <img src="./help.png" alt="Heading Image" className="heading-image" />
      <h1 className="main-heading">HELP SECTION</h1>
    </div>
      <Link to="/MotorInfo" className="link-button">
        Motor and Faults Information
      </Link>
      <Link to="/reportgeneration" className="link-button">
        Report Generation
      </Link>      
      <Link to="/MoreInfo" className="link-button">
        Dashboard
      </Link>
      <Link to="/report" className="link-button">
        Report
      </Link>
    </div>
  );
};

export default MainPage;
