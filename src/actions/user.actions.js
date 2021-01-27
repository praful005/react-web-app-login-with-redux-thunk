import request from "../api/request";
// import requestWithToken from "../api/request";

import { LOGIN_ERROR,LOGIN_LOAD,LOGIN_SUCCESS,USER_LOGOUT } from "./types";
/**
 * loginAction
 * @param {USERNAME, PASSWORD}
 */
export const login = (mobile_no,password) => {
    console.log(mobile_no,password);
    return async dispatch => {
        dispatch({ type: LOGIN_LOAD });
        try {

            const data = { mobile_no,password };
            const res = request({
                url:'api/login',
                method: 'POST',
                data,
            });
            let res1 = await res;
            if(res1.status){
                localStorage.setItem('token', res1.data.token);
                localStorage.setItem('userData', JSON.stringify(res1.data));

                dispatch({ type: LOGIN_SUCCESS, payload: res1.data });
            } else {
                dispatch({ type: LOGIN_ERROR, payload: "Invalid username or password" });
            }
        } catch (err) {
            dispatch({
                type: LOGIN_ERROR,
                data: 'Login api error'
            });
        }
    }
}


/**
 * logoutAction
 * @param
 */
export const logout = () => {
    return async dispatch => {
        dispatch({ type: USER_LOGOUT });
    }
}