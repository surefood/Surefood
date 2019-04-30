import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function DashboardBody() {
  return (
    <div class="dashboard_container px-3">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Card
              style={{
                'background-image':
                  '-webkit-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%)',
                padding: 30,
                marginBottom: 30
              }}
            >
              <Card.Body>
                <Card.Title>Customers</Card.Title>
                <Card.Text>0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              style={{
                'background-image':
                  '-webkit-linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
                padding: 30,
                marginBottom: 30
              }}
            >
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <Card.Text>0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              style={{
                'background-image':
                  ' -webkit-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)',
                padding: 30,
                marginBottom: 30
              }}
            >
              <Card.Body>
                <Card.Title>Meal Plans</Card.Title>
                <Card.Text>0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Table starts */}
      <Container>
        <h3 class="mt-5 text-dark"> Products</h3>
        <Table hover responsive striped style={{ marginTop: 10 }}>
          <thead
            style={{ background: '#333', color: '#fff', borderRadius: '10px' }}
          >
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Garri</td>
              <td>2000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fried Rice</td>
              <td>3000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ukwa</td>
              <td>2000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
          </tbody>
        </Table>

        <h3 className="mt-5 text-dark">Meal Plans</h3>
        <Table hover responsive striped style={{ marginTop: 10 }}>
          <thead
            style={{ background: '#333', color: '#fff', borderRadius: '10px' }}
          >
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Garri</td>
              <td>2000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fried Rice</td>
              <td>3000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ukwa</td>
              <td>2000</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet illum sunt eos voluptates rem, repellendus tenetur ullam
                provident perferendis velit.
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default DashboardBody;
