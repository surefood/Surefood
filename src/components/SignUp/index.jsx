import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import './signup.css';
import * as ROUTES from '../../constants/route';

const INITIAL_STATE = {
  name: '',
  email: '',
  location: '',
  city: '',
  state: '',
  country: '',
  password: '',
  password2: '',
  error: ''
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser);
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => this.setState({ error }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      name,
      email,
      location,
      city,
      state,
      country,
      password,
      password2,
      error
    } = this.state;
    const isInvalid =
      password !== password2 ||
      password === '' ||
      name === '' ||
      email === '' ||
      location === '' ||
      city === '' ||
      state === '' ||
      country === '';
    return (
      <div className="signup">
        <Navigation />
        <section>
          <Row>
            <Col md={6} xs={12} className="px-3">
              <form onSubmit={this.onSubmit} className="px-5 py-5 ">
                <h3 className="mb-4 text-center font-weight-bold">
                  Create an account
                </h3>
                {error && <p class="alert alert-danger">{error.message}</p>}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter restaurant Name "
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter restaurant email"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Enter Location"
                    value={location}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="Enter City"
                    value={city}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="Enter State"
                    value={state}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Enter Country eg Nigeria"
                    value={country}
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
                <div className="form-group">
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm password"
                    value={password2}
                    onChange={this.onChange}
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
  }
}

const SignUp = withRouter(withFirebase(SignUpFormBase));

export default SignUp;
