import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import {Route, Routes, Navigate} from "react-router-dom";
import Infra from './pages/Infra';
import Vcenter from './pages/Vcenter';
import Nsx from './pages/Nsx';
import Tkg from './pages/Tkg';
import Tca from './pages/Tca';
import Download from './pages/Download';
import Home from './pages/Home';


const App= () => {
  return (
    <div className="App">
     <MyNavbar/>
      <main>
        <Routes>

          <Route path="/" element={<Navigate to="/Home" />} />
          
          <Route path="/home" element={<Home/>} />

          <Route path="/infra" element={<Infra />} />
            
       
          <Route path="/vcenter" element={<Vcenter />} />
            
         
          <Route path="/nsx" element={<Nsx />} />
            
          
          <Route path="/tkg" element={ <Tkg/>} />

          <Route path="/tca" element={ <Tca/>} />

          <Route path="/download" element={ <Download/>} />
           
         
      </Routes>
      </main>
    </div>
  );
}

export default App;
