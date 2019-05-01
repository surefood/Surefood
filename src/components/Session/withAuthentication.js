import React from 'react';
import AuthContextUser from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }
    render() {
      return (
        <AuthContextUser.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthContextUser.Provider>
      );
    }
  }
  return withFirebase(WithAuthentication);
};

export default withAuthentication;
