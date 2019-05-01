import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import './home.css';

import Navigation from '../Navigation';
import Footer from '../Footer';

const Home = () => (
  <div class="home">
    <Navigation />

    {/* Home top */}
    <div className="home_top">
      <Container>
        <Row>
          <Col xs={12} md={6} className="left">
            <h1 className="font-weight-bold banner_header">SureFood</h1>
            <p className="font-weight-light mt-2 mb-3">
              Get the best meal plans in the best hotels cashlessly
            </p>
            <a href="" className="btn btn-banner">
              SIGN UP FOR FREE
            </a>
          </Col>
          <Col xs={12} md={6} />
        </Row>
      </Container>
    </div>

    {/* How to use surefood section */}
    <div className="how_to py-5">
      <Container>
        <h2 className="text-center font-weight-bold mt-5">
          How to use SureFood
        </h2>
        <h3 className="mt-5 mb-3 font-weight-bold">As a restaurant</h3>
        <Row>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">Sign up</h5>
            <p className="font-weight-light">
              Open an account by clicking sign up on the navbar. Fill in the
              details of your restaurant and register
            </p>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">
              Create a product
            </h5>
            <p className="font-weight-light">
              From the Dashbord click on Product. Fill the details of the
              product and submit to create a product
            </p>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">
              Create a meal plan
            </h5>
            <p className="font-weight-light">
              You can create a meal plan. A meal plan is a mixture of different
              products eg rice, chicken etc. Go to the dashboard click on meal
              and create a new meal plan ( it's as easy as that)
            </p>
          </Col>
        </Row>
        <h3 className="mt-4 mb-3 font-weight-bold ">As a user</h3>
        <Row>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">
              Download sureFood Mobile app
            </h5>
            <p className="font-weight-light">
              Go to playstore or ios store and download sureFood app
            </p>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">Sign up</h5>
            <p className="font-weight-light">
              Quickly sign up to get started with us
            </p>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <h5 className="mb-3 font-weight-bold text-center">
              Fund your Account
            </h5>
            <p className="font-weight-light">
              Fund your sureFood account to enable you subscribe for meals at
              the best restaurants. You can then add meals you want to cart
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    {/* How does it work */}
    <div className="how_does py-5">
      <Container>
        <h3 className="text-center font-weight-bold mb-3">How does it work</h3>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          voluptatibus quibusdam veritatis, aliquid soluta ipsum dicta
          doloremque harum autem laudantium ex optio aut nihil nesciunt.
          Doloremque, pariatur voluptates incidunt aut sapiente et accusantium
          enim nobis quae id consequuntur veniam natus temporibus tempora orem
          ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatibus
          quibusdam veritatis, aliquid soluta ipsum dicta doloremque harum autem
          laudantium ex optio aut nihil nesciunt. Doloremque, pariatur
          voluptates incidunt aut sapiente et accusantium enim nobis quae id
          consequuntur veniam natus temporibus tempora veritatis repellendus
          praesentium nisi fugiat nihil similique quia. veritatis repellendus
          praesentium nisi fugiat nihil similique quia. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Vel, voluptatibus quibusdam
          veritatis, aliquid soluta ipsum dicta doloremque harum autem
          laudantium ex optio aut nihil nesciunt. Doloremque, pariatur
          voluptates incidunt aut sapiente et accusantium enim nobis quae id
          consequuntur veniam natus temporibus tempora orem ipsum dolor sit amet
          consectetur adipisicing elit. Vel, voluptatibus quibusdam veritatis,
          aliquid soluta ipsum dicta doloremque harum autem laudantium ex optio
          aut nihil nesciunt. Doloremque, pariatur voluptates incidunt aut
          sapiente et accusantium enim nobis quae id consequuntur veniam natus
          temporibus tempora veritatis repellendus praesentium nisi fugiat nihil
          similique quia. veritatis repellendus praesentium nisi fugiat nihil
          similique quia.
        </p>
      </Container>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;
