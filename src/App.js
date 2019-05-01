import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/route';
import Dashboard from './Dashboard';
import Home from './components/Home';
import SignUpPage from './components/SignUp';
import SignInPage from './components/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      </Router>
    </div>
  );
}

export default App;
