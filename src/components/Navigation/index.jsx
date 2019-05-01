import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { AuthContextUser } from '../Session';
import { withRouter } from 'react-router-dom';
import './navigation.css';

import * as ROUTES from '../../constants/route';

const NavigationNonAuth = () => (
  <Nav className="ml-auto">
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
);

const NavigationAuthBase = ({ firebase, history }) => (
  <Nav className="ml-auto">
    <Nav.Link className="header-links">
      <Link to={ROUTES.HOME}>Home</Link>
    </Nav.Link>
    <Nav.Link className="header-links">
      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
    </Nav.Link>
    <Nav.Link className="header-links">
      <Link to={ROUTES.HOME} onClick={firebase.signOut}>
        Logout
      </Link>
    </Nav.Link>
  </Nav>
);

const NavigationAuth = withRouter(withFirebase(NavigationAuthBase));

const Navigation = ({ authUser }) => (
  <AuthContextUser.Consumer>
    {authUser => (
      <div class="navigation">
        <Header>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</Header>
      </div>
    )}
  </AuthContextUser.Consumer>
);

export default Navigation;
