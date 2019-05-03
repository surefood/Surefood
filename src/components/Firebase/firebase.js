import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBnFbRlbnX5R47X5YWXWM10-lgHfSxuPcM',
  authDomain: 'surefood-cfd70.firebaseapp.com',
  databaseURL: 'https://surefood-cfd70.firebaseio.com',
  projectId: 'surefood-cfd70',
  storageBucket: 'surefood-cfd70.appspot.com',
  messagingSenderId: '504312452829'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  //** AUTH API */
  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInUserWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  //** USER API */
  user = uid => this.db.ref(`users/${uid}`);

  restaurants = () => this.db.ref('restaurants');
  restaurant = uid => this.db.ref(`restaurants/${uid}`);

  products = () => this.db.ref(`products`);
  product = uid => this.db.ref(`products/${uid}`);

  productInRestaurant = uid => this.db.ref(`restaurants/${uid}/products`);
}

export default Firebase;
