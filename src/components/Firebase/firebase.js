import app from 'firebase/app';
import 'firebase/auth';

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
  }

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInUserWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();
}

export default Firebase;
