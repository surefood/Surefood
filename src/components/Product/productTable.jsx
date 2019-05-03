import React from 'react';
import Table from 'react-bootstrap/Table';

const productTable = ({ products }) => {
  return (
    <div>
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
          {!products && <p>loading...</p>}
          {products.map((product, index) => (
            <tr key={product.uid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default productTable;
