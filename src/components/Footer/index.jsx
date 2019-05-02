import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';
import * as ROUTES from '../../constants/route';

const Footer = () => (
  <div className="footer">
    <Container>
      <div className="my-4">
        <Row>
          <Col xs={12} md={4}>
            <h4 class="mb-2 mt-4">ABOUT US</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
              libero illum aperiam quaerat, laborum qui doloremque quas fugiat
              ratione!
            </p>
          </Col>
          <Col xs={12} md={4} class="mb-4">
            <h4 class="mb-2 mt-4">NAVIGATION</h4>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="">Sign In</Link>
          </Col>
          <Col xs={12} md={4} class="mb-4">
            <h4 class="mb-2 mt-4">CONTACT</h4>
            <p>
              <span>
                <i className="fas fa-map-marker mr-2" /> Address:
              </span>{' '}
              Lekki, Lagos Nigeria.
            </p>
            <p>
              <span>
                <i className="fas fa-phone mr-2" /> Phone:
              </span>{' '}
              +234 3422 4334
            </p>
            <p>
              <span>
                <i className="fas fa-mail-bulk mr-2" /> mail:
              </span>{' '}
              surefood@gmail.com
            </p>
          </Col>
        </Row>
        <div className="d-flex align-items-center flex-column social-media-icon">
          <h4 class="my-3">Follow us</h4>
          <div>
            <a href="" className="mr-2">
              <i class="fab fa-facebook-f " />
            </a>
            <a href="" className="mx-2">
              <i class="fab fa-twitter " />
            </a>
            <a href="" className="mx-2">
              <i class="fab fa-instagram " />
            </a>
          </div>
        </div>
      </div>
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
