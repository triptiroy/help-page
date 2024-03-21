import React from 'react';
import './ReportGenerationPage.css';
import screenshot1 from './screenshots/Screenshot1.png';
import screenshot2 from './screenshots/Screenshot2.png';
import screenshot3 from './screenshots/Screenshot3.png';
import screenshot4 from './screenshots/Screenshot4.png';
import screenshot5 from './screenshots/Screenshot5.png';

const ReportGenerationPage = () => {
  return (
    <div className="report-generation-page">
      <div className="report-title"><h1> STEPS FOR REPORT GENERATION</h1>
      </div>
      <h2>Step 1:  After testing all the motors, number of not working, working and faulty motors can be seen here.</h2>
      <img src={screenshot1} alt="Screenshot 1" style={{ width: '600px', height: '300px' }} />
      
      <h2>Step 2:The table can be accessed to get Health Card of all the motors</h2>
      <img src={screenshot2} alt="Screenshot 2" style={{ width: '600px', height: '300px' }} />
      
      <h2>Step 3: Health Card Information</h2>
      <p>The health card contains the following information:-
Current and frequency data at different points of time.</p>
      <img src={screenshot3} alt="Screenshot 3" style={{ width: '600px', height: '300px' }} />
      
      
      <p>Fault Types, such as Broken Rotor Bar, Broken End Ring, Eccentricity, Bearing Fault, and Inter-turn Short Circuit, along with their occurrences over the last 1 week, 1 month, and 1 year can be identified.</p>
      <img src={screenshot4} alt="Screenshot 4" style={{ width: '600px', height: '300px' }} />
      
      
      <h2>Step 4: Generate PDF</h2>
      <p>The report of the motor can be generated through the "Generate PDF" option.</p>
      <img src={screenshot5} alt="Screenshot 5" style={{ width: '600px', height: '300px' }} />
      
    </div>
  );
};

export default ReportGenerationPage;
