import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from "./../actions/user.actions";

const Login = props => {
    const [username, setUsername] = useState('1234567890');
    const [password, setPassword] = useState('123');
    const [load, setLoad] = useState(false);
    
    const dispatch  = useDispatch();
    const {isLoading,error}   = useSelector(state => state.user);
    
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('userData')) {
            setIsLogin(true);
        }
    },[isLoading])
    
    if(isLogin){
        return <Redirect to={{ pathname: '/dashboard' }} />
    }

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username,password));
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-5">
            <form onSubmit={formSubmit}>
                <h3>Log in</h3>
                {
                    (error!==null)? (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                            )
                    :null
                }
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button disabled={isLoading} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
        </div>
    )
}
export default Login