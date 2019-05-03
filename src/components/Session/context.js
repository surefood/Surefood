import React from 'react';

const AuthContextUser = React.createContext(null);

export const withAuthUser = Component => props => (
  <AuthContextUser.Consumer>
    {authUser => <Component {...props} authUser={authUser} />}
  </AuthContextUser.Consumer>
);

export default AuthContextUser;
