// import request from "../api/request";
import requestWithToken from "../api/requestWithToken";

import { LOGIN_ERROR,LOGIN_LOAD,LOGIN_SUCCESS,USER_LOGOUT } from "./types";
/**
 * loginAction
 * @param {USERNAME, PASSWORD}
 */
export const getInquiry = () => {
    return async dispatch => {
        try {
            const res = requestWithToken({
                url:'api/inquiry',
                method: 'GET'
            });
            let res1 = await res;
            dispatch({ type: 'ALL_INQUIRY', payload: res1.data });
        } catch (err) {
            dispatch({
                type: 'INQUIRY_ERROR',
                data: 'Login api error'
            });
        }
    }
}