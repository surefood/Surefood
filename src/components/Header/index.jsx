import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import logo from '../../logo.svg';

function Header() {
  return (
    <Navbar fixed="top" expand="lg" class="navbar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-md-none">
          <Nav.Link className="header-links" href="#home">
            <i class="fas fa-columns" />
            Dashboard
          </Nav.Link>
          <Nav.Link className="header-links" href="#link">
            <i class="fas fa-shopping-cart" />
            Orders
          </Nav.Link>
          <Nav.Link className="header-links" href="#link">
            <i class="fas fa-drumstick-bite" /> Meal plans
          </Nav.Link>
          <Nav.Link className="header-links" href="#link">
            <i class="fas fa-chart-bar" />
            Products
          </Nav.Link>
          <Nav.Link className="header-links" href="#link">
            <i class="fas fa-address-card" /> Customers
          </Nav.Link>
          <Nav.Link className="header-links" href="#link">
            <i class="fas fa-money-bill-wave" /> Transactions
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
