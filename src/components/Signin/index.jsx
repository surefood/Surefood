import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import './signin.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: ''
};

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = () => {};

  onChange = () => {};
  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === '' || password === '';
    return (
      <div className="signin">
        <Navigation />
        <section>
          <Row>
            <Col
              md={6}
              xs={12}
              className="px-3 h-100 d-flex align-items-center justify-content-center"
            >
              <form onSubmit={this.onSubmit} className="w-75">
                <h3 className="mb-4 text-center font-weight-bold">
                  Sign into your account
                </h3>
                {error && <p class="alert alert-danger">{error.message}</p>}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  disabled={isInvalid}
                  type="submit"
                  className="btn btn-auth"
                >
                  Login
                </button>
              </form>
            </Col>
            <Col md={6} xs={12} className="right d-md-block d-none" />
          </Row>
        </section>
      </div>
    );
  }
}

export default SignIn;
