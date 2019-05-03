import React, { Component } from 'react';
import ProductModal from './productModal';
import ProductTable from './productTable';
import { withAuthUser } from '../Session';
import { withFirebase } from '../Firebase';

import './product.css';

class ProductPage extends Component {
  state = {
    authUser: {},
    products: []
  };

  componentDidMount() {
    console.log('ComponentDidMount');
    this.listener = this.getUserAndProducts();
  }

  getUserFromFirebase = () => {
    const { firebase, authUser } = this.props;
    return new Promise((resolve, reject) => {
      firebase
        .user(authUser.uid)
        .once('value')
        .then(snapshot => {
          resolve(snapshot.val());
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  getProductsFromFirebase = () => {
    const { firebase, authUser } = this.props;
    return new Promise((resolve, reject) => {
      firebase.user(authUser.uid).on('value', function(snapshot) {
        const restaurantId = snapshot.val().restaurantId;

        firebase
          .productInRestaurant(restaurantId)
          .on('value', function(product) {
            const productObj = product.val();
            if (productObj) {
              const productList = Object.keys(productObj).map(key => ({
                ...productObj[key],
                uid: key
              }));
              resolve(productList);
            }
          });
      });
    });
  };

  getUserAndProducts = async () => {
    const [authUser, products] = await Promise.all([
      this.getUserFromFirebase(),
      this.getProductsFromFirebase()
    ]);
    this.setState({ authUser, products });
    console.log(authUser);
  };

  render() {
    console.log(this.state.authUser);
    return (
      <div className="product-page">
        <ProductModal
          firebase={this.props.firebase}
          authUser={this.state.authUser}
          listener={this.getUserAndProducts}
        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default withAuthUser(withFirebase(ProductPage));
