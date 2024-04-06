import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Update import here
import MainPage from './MainPage';
// import ReportGenerationPage from './ReportGenerationPage';
import MotorInfo from './MotorInfo';
import MoreInfo from './MoreInfo';
import ReportPage from './ReportPage';
import ReportGenerationPage from './ReportGeneration';
import SidebarComponent from './SidebarComponent'; 


import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/motorInfo" element={<MotorInfo/>} />
        <Route path="/moreInfo" element={<MoreInfo/>} />
        <Route path="/reportgeneration" element={<ReportGenerationPage/>} />
        <Route path="/report" element={<ReportPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
