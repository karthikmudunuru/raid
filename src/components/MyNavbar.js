import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import classes from './MyNavbar.module.css';

const MyNavbar = () => {
return (
<header className={classes.header}>
  <Navbar bg="#2b669c" variant="light" >
    <Container>
      <Navbar.Brand className={classes.logo}>RAID</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
        <nav className={classes.nav}>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/home">Home</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/infra">Infra</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/vcenter">Vcenter</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/nsx">NSX</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/tkg">TKG</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/tca">TCA</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/vrli">vRLI</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/vro">vRO</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/vio">vIO</NavLink>
          <NavLink className={(navData)=> navData.isActive ? classes.activelink :classes.navlink} to="/download">Download</NavLink>
        </nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
</header>

);

};

export default MyNavbar;