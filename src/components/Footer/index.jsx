import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <Container>
      <Row>
        <Col>Hello</Col>
        <Col>Footer</Col>
        <Col>Footer</Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center copyright">
      <span className="">
        &copy; Copyright SureFood {new Date().getFullYear()}. All rights
        reserved.
      </span>
    </div>
  </div>
);

export default Footer;
