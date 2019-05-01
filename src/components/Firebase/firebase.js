import app from 'firebase/app';

const config = {};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth;
  }

  createUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInUserWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  signOut = () => this.auth.signOut();
}

export default Firebase;
