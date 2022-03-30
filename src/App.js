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
import Vio from './pages/Vio';
import Vrli from './pages/Vrli';
import Vro from './pages/Vro';
import Vcd from './pages/Vcd';

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

          <Route path="/vcd" element={ <Vcd/>} />

          <Route path="/vrli" element={ <Vrli/>} />

          <Route path="vro" element={ <Vro/>} />

          <Route path="/vio" element={ <Vio/>} />

          <Route path="/download" element={ <Download/>} />

           
         
      </Routes>
      </main>
    </div>
  );
}

export default App;
