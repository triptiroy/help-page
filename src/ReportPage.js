import React from 'react';
import './ReportPage.css';
import screenshot13 from './screenshots/Screenshot13.png';
import screenshot14 from './screenshots/Screenshot14.png';
import screenshot15 from './screenshots/Screenshot15.png';

const ReportPage = () => {
  return (
    <div className="report-page">
      <h1>Report Page</h1>
      <br />
      <p>The report of the motors provides information - <br /> <br />
      <ul>
        <li>MACHINE CONDITION DETAILS</li>
        <li>CURRENT SIGNATURE ANALYSIS</li>
        <li>LEGENDS</li>
        <li>DETAILED CALCULATIONS</li>
      </ul>
      </p>
      <br />
      <h2>MACHINE CONDITION DETAILS</h2>
      <p>
        <br />
      <ul>
        <li>"CONDITION OF THE MACHINE" tells us about the working condition of the machine.</li>
        <li>"NAMEPLATE DETAILS" include tag ID, make, rating, stator voltage and current, insulation class, rated frequency, and speed.</li>
      </ul>
      <br />
      <img src={screenshot13} alt="Screenshot 13" style={{ width: '600px', height: '300px' }} /><br />
      </p>
      <h2>CURRENT SIGNATURE ANALYSIS</h2>
      <p>
        <br />
      <ul>
        <li>Gives a Performance Summary under the headings as mentioned int he screenshot.</li>
      </ul>
      <br />
      <img src={screenshot14} alt="Screenshot 14" style={{ width: '600px', height: '500px' }} />
      </p>
      <h2>LEGENDS</h2>
      <p>
        <br />
      
      <br />
      <img src={screenshot15} alt="Screenshot 15" style={{ width: '800px', height: '400px' }} />
      </p>
      <h2>DETAILED CALCULATIONS</h2>
      <p>
        <br />
      <ul>
        <li>Includes running speed, pole pass frequency, load percentage, RMS, peak, and crest factor for current and voltage.</li>
        <li>Power factor, impedance, kVA, kW, kVARS, motor efficiency, loss due to impedance imbalance, and output power are calculated.</li>
        <li>Harmonic Distortion Results:<br />Shows harmonic distortion percentages for current and voltage at different frequencies.
        <br />Provides peak values for current and voltage harmonic distortion.</li>
        <li>Vibration Measurement:<br />Displays vibration levels in millimeters per second for motor (DE) and (NDE) in horizontal, vertical, and axial directions.</li>
      </ul>
      
      </p>
    </div>
  );
};

export default ReportPage;
