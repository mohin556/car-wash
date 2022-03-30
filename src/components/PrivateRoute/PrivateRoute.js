import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContex } from '../../App';

const PrivateRoute = ({ children,...rest }) => {
   
    const [loggedInUser,setLoggedInUser] = useContext(userContex);



    return (
        <Route
                {...rest}
                render={({ location }) =>
               loggedInUser.email || loggedInUser.name ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    />
                )
                }
      />
    );
};

export default PrivateRoute;