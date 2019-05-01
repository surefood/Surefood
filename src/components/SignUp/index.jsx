import React from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import './signup.css';

const SignUp = () => (
  <div className="signup">
    <Navigation />
    <section>
      <Row>
        <Col md={6} xs={12} className="px-3">
          <form action="" className="px-5 py-5 ">
            <h3 className="mb-4 text-center font-weight-bold">
              Create an account
            </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter restaurant Name "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter restaurant email "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter State"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Country eg Nigeria"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
            <button type="submit" className="btn btn-auth">
              Register
            </button>
          </form>
        </Col>
        <Col md={6} xs={12} className="right d-md-block d-none" />
      </Row>
    </section>
  </div>
);

export default SignUp;
