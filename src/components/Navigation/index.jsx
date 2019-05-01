import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Header from '../Header';
import { Link } from 'react-router-dom';
import './navigation.css';

import * as ROUTES from '../../constants/route';

const Navigation = () => (
  <div class="navigation">
    <Header>
      <Nav className="ml-auto">
        <Nav.Link className="header-links">
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </Nav.Link>
        <Nav.Link className="header-links">
          <Link to={ROUTES.HOME}>Home</Link>
        </Nav.Link>
        <Nav.Link className="header-links">
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </Nav.Link>
        <Nav.Link className="header-links">
          <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        </Nav.Link>
      </Nav>
    </Header>
  </div>
);

export default Navigation;
