import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const  PrivateRoute = ({ component: Component, withHeader, ...rest }) => {
    
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('userData')) {
                // not logged in so redirect to login page
                return <Redirect to={{ pathname: '/' }} />
            }
            if (withHeader){
                return (
                    <>
                        <Header {...props} />
                        <Component {...props} />
                        <Footer {...props} />
                    </>  
                )
            } else {
                return (<Component {...props} />)
            }
        }} />
    );
}

export default PrivateRoute;