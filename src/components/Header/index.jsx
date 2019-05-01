import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import logo from '../../logo.svg';

function Header(props) {
  return (
    <Navbar fixed="top" expand="lg" class="navbar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">{props.children}</Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
