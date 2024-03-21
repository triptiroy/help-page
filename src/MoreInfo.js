import React from 'react';
import './MoreInfo.css';
import screenshot11 from './screenshots/Screenshot11.png';
import screenshot12 from './screenshots/Screenshot12.png';

const MoreInfo = () => {
  return (
    <div className="more-info">
      <div className="title"><h1>NAVIGATING THROUGH THE DASHBOARD</h1>
      </div>
      <h2>All Motors</h2> 
         <img src={screenshot11} alt="Screenshot 11" style={{ width: '600px', height: '150px' }} />
      <p>It depicts a search form for filtering and sorting motors based on criteria such as search keywords, status, and motor type. Sort motors based on latest, oldest, A-Z, and Z-A criteria.</p>
      
      <h2>Search and Sorting</h2>
      <img src={screenshot12} alt="Screenshot 12" style={{ width: '600px', height: '150px' }} />
      <p>Profile Access detailed information about the logged-in user's profile, including First Name, Last Name, Email, and Location.</p>
      
      <h2>About Us</h2>
      <p>Learn more about the team behind and GAIL by clicking on the link <a href="https://en.wikipedia.org/wiki/GAIL" target="_blank" rel="noreferrer">GAIL</a>. Get insights into the development team and the vision behind the platform under this section.</p>
      
      
      
      
    </div>
  );
};

export default MoreInfo;
