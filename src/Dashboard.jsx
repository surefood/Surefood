import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardBody from './components/DashboardBody';
import Nav from 'react-bootstrap/Nav';

function Dashboard() {
  return (
    <div>
      <Header>
        <Nav className="ml-auto d-md-none ">
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
      </Header>
      <Sidebar />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
