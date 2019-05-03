import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withAuthUser } from '../Session';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  show: false,
  name: '',
  price: '',
  imageLink: '',
  description: '',
  error: null
};
class ProductModal extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleShow = () => this.setState({ show: true });

  handleClose = () => this.setState({ show: false });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const { name, price, imageLink, description } = this.state;
      const { firebase, authUser, listener } = this.props;
      const restaurantId = authUser.restaurantId;
      const data = {
        restaurantId,
        name,
        price,
        imageLink,
        description
      };
      //push data to /products in firebase
      firebase.products().push(data);
      //push data to /restaurants/products in firebase
      firebase
        .productInRestaurant(restaurantId)
        .push({ name, price, imageLink, description });

      this.setState({ ...INITIAL_STATE });

      listener();
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { name, price, imageLink, description, error } = this.state;
    const isInvalid =
      name === '' || price === '' || imageLink === '' || description === '';

    return (
      <div className="product-modal py-3">
        <div className="d-flex justify-content-end px-3">
          <button className="btn btn-modal " onClick={this.handleShow}>
            <i className="fas fa-plus mr-2 mb-3" /> Create Product
          </button>
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of Product"
                  value={name}
                  name="name"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="link"
                  className="form-control"
                  placeholder="Image link of the product"
                  value={imageLink}
                  name="imageLink"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price of Product"
                  value={price}
                  name="price"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <textarea
                name="description"
                id=""
                cols="10"
                rows="5"
                value={description}
                className="form-control"
                onChange={this.handleChange}
                required
              />

              <button
                disabled={isInvalid}
                type="submit"
                className="mt-3 btn btn-modal"
              >
                Add product
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ProductModal;
