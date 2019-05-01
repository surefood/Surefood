import React from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import './signin.css';

const SignIn = () => (
  <div className="signin">
    <Navigation />
    <section>
      <Row>
        <Col
          md={6}
          xs={12}
          className="px-3 h-100 d-flex align-items-center justify-content-center"
        >
          <form action="" className="w-75">
            <h3 className="mb-4 text-center font-weight-bold">
              Sign into your account
            </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-auth">
              Login
            </button>
          </form>
        </Col>
        <Col md={6} xs={12} className="right d-md-block d-none" />
      </Row>
    </section>
  </div>
);

export default SignIn;
