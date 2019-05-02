import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import DashboardBody from '../DashboardBody';
import Nav from 'react-bootstrap/Nav';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

function Dashboard({ firebase }) {
  return (
    <div>
      <Header>
        <Nav className="ml-auto d-md-none ">
          <Nav.Link className="header-links" href="/">
            <i class="fas fa-home" />
            Home
          </Nav.Link>
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
          <Nav.Link className="header-links" onClick={firebase.signOut}>
            <i class="fas fa-door-open" /> Logout
          </Nav.Link>
        </Nav>
      </Header>
      <Sidebar />
      <DashboardBody />
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(Dashboard));
